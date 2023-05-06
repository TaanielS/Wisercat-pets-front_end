import { Component, OnInit } from '@angular/core';
import { Option } from 'src/app/models/option.model';
import { PetManagementService } from 'src/app/services/pet-management.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})

export class AddPetComponent implements OnInit {
  options?: Option[];
  types?: String[];
  furColors?: String[];
  countries?: String[];
  submitted = false;

  constructor(private petManagementService: PetManagementService) { }

  ngOnInit(): void {
    this.retrieveOptions();
  }

  retrieveOptions(): void {
    this.petManagementService.getOption("type").subscribe({
      next: (data) => {
        this.types = data;
        console.log(data);
      },
      error: (e) => console.log(e)
    });
    this.petManagementService.getOption("furColor").subscribe({
      next: (data) => {
        this.furColors = data;
        console.log(data);
      },
      error: (e) => console.log(e)
    });
    this.petManagementService.getOption("country").subscribe({
      next: (data) => {
        this.countries = data;
        console.log(data);
      },
      error: (e) => console.log(e)
    });
  }

  petForm = new FormGroup({
    code: new FormControl(0, [Validators.required, Validators.pattern("\\d+")]),
    name: new FormControl('', [Validators.required, Validators.maxLength(25)]),
    type: new FormControl('', [Validators.required, Validators.pattern("Cat|Dog|Horse|Rabbit|Parrot")]),
    furColor: new FormControl('', [Validators.required, Validators.pattern("Black|White|Brown|Yellow|Blue")]),
    country: new FormControl('', [Validators.required, Validators.pattern("Estonia|Latvia|Lithuania|Finland|Sweden|Norway")]),
  });

  onSubmit(): void {
    const isValid = this.petForm.valid;
    console.log("Form is valid:", isValid);
    if (isValid) {
      console.log("Sending the pet form...");
      const data = this.petForm.value;
      this.petManagementService.create(data).subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true
        },
        error: (e) => console.log(e)
      });
    }
    else {
      console.log("ERROR: the pet form had bad inputs.");
    }
  }
}

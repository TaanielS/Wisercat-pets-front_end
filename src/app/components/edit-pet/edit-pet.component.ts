import { Component, OnInit } from '@angular/core';
import { Option } from 'src/app/models/option.model';
import { PetManagementService } from 'src/app/services/pet-management.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})

export class EditPetComponent implements OnInit {
  options?: Option[];
  types?: String[];
  furColors?: String[];
  countries?: String[];
  submitted = false;
  petCode?: string;

  constructor(private petManagementService: PetManagementService) { }

  ngOnInit(): void {
    var url = new URL(window.location.href);
    this.petCode = url.pathname.split("/")[2]
    console.log("Petcode:", this.petCode);
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
    name: new FormControl('', [Validators.required, Validators.maxLength(25)]),
    type: new FormControl('', [Validators.required, Validators.pattern("Cat|Dog|Horse|Rabbit|Parrot")]),
    furColor: new FormControl('', [Validators.required, Validators.pattern("Black|White|Brown|Yellow|Blue")]),
    country: new FormControl('', [Validators.required, Validators.pattern("Estonia|Latvia|Lithuania|Finland|Sweden|Norway")]),
  });

  get name() {
    return this.petForm.get("name");
  }

  get type() {
    return this.petForm.get("type");
  }

  get furColor() {
    return this.petForm.get("furColor");
  }

  get country() {
    return this.petForm.get("country");
  }

  onSubmit(): void {
    const isValid = this.petForm.valid;
    console.log("Form is valid:", isValid);
    this.submitted = true;
    if (isValid) {
      console.log("Sending the pet form...");
      const data = this.petForm.value;
      this.petForm.reset();
      this.petManagementService.edit(this.petCode!, data).subscribe({
        next: (res) => {
          console.log(res);
          console.log("submitted");
        },
        error: (e) => { if (e.status != 201) console.log(e.status); else console.log("Success!") }
      });
    }
    else {
      console.log("ERROR: the pet form had bad inputs.");
    }
  }
}

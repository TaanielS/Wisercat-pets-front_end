import { Component, OnInit } from '@angular/core';
import { Option } from 'src/app/models/option.model';
import { PetManagementService } from 'src/app/services/pet-management.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
    code: new FormControl(0),
    name: new FormControl(''),
    type: new FormControl(''),
    furColor: new FormControl(''),
    country: new FormControl(''),
  });

  onSubmit(): void {
    const data = this.petForm.value;
    this.petManagementService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true
      },
      error: (e) => console.log(e)
    });
  }


}

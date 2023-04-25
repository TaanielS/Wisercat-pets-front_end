import { Component, OnInit} from '@angular/core';
import { Pet } from 'src/app/models/pet.model';
import { PetManagementService } from 'src/app/services/pet-management.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})

export class AddPetComponent implements OnInit {
  submitted = false;

  constructor(private petManagementService: PetManagementService) { }

  ngOnInit(): void {
      
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
    this.petManagementService.create(data).subscribe({next: (res) => {console.log(res); 
                                                                      this.submitted = true},
                                                                    error: (e) => console.log(e)});
    }
    

}

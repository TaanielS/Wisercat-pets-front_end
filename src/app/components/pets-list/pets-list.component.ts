import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet.model';
import { PetManagementService } from 'src/app/services/pet-management.service';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {
  pets?: Pet[];

  constructor(private petManagementService: PetManagementService) { }

  ngOnInit(): void {
    this.retrievePets();
  }

  retrievePets(): void {
    this.petManagementService.getAll().subscribe({
      next: (data) => {
        this.pets = data;
        console.log(data);
      },
      error: (e) => console.log(e)
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet.model';
import { PetManagementService } from 'src/app/services/pet-management.service';
import { Sort } from '@angular/material/sort';


export interface Dessert {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {
  pets?: Pet[];
  sortedPets?: Pet[];

  desserts: Dessert[] = [
    { name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
    { name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4 },
    { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
    { name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4 },
    { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4 },
  ];

  constructor(private petManagementService: PetManagementService) {
    this.sortedPets = this.pets?.slice();
  }

  sortData(sort: Sort) {
    const data = this.pets?.slice();
    if (!sort.active || sort.direction === "") {
      this.sortedPets = data;
      return;
    }

    this.sortedPets = data?.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'code': return compare(a.code as number, b.code as number, isAsc);
        case 'name': return compare(a.name as string, b.name as string, isAsc);
        case 'type': return compare(a.type as string, b.type as string, isAsc);
        case 'furColor': return compare(a.furColor as string, b.furColor as string, isAsc);
        case 'country': return compare(a.country as string, b.country as string, isAsc);
        default: return 0;
      }
    });
  }


  ngOnInit(): void {
    this.retrievePets();
  }

  retrievePets(): void {
    this.petManagementService.getAll().subscribe({
      next: (data) => {
        this.pets = data;
        this.sortedPets = data;
        console.log(data);
      },
      error: (e) => console.log(e)
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}  

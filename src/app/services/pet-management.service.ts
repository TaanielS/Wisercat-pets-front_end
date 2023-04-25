import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet.model';

const baseUrl = 'http://localhost:8080/api/pets'

@Injectable({
  providedIn: 'root'
})
export class PetManagementService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pet[]>{
    return this.http.get<Pet[]>(baseUrl)
  }
  
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}
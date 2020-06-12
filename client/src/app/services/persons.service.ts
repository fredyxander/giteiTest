import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  API = 'http://localhost:3000/api';
  constructor(
    private http: HttpClient
  ) { }

  getPersons(){
    return this.http.get(`${this.API}/personas`);
  }

  GetPerson(personId){
    return this.http.get(`${this.API}/personas/${personId}`);
  }

  savePerson(persona: Persona){
    return this.http.post(`${this.API}/personas`, persona);
  }

  deletePerson(personId){
    return this.http.delete(`${this.API}/personas/${personId}`);
  }

  updatePerson(personId, updatePerson: Persona): Observable<any>{
    return this.http.put(`${this.API}/personas/${personId}`, updatePerson);
  }

}

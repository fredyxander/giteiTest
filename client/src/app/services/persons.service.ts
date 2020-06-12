import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/persona';
import { Observable, of } from 'rxjs';
import { map, catchError } from '../../../node_modules/rxjs/operators';
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

  GetPerson(personId): Observable<Persona>{
    return this.http.get(`${this.API}/personas/${personId}`).pipe(
      map((res) => res),
      catchError((err, c) => of(null))
    );
  }

  savePerson(persona: Persona){
    return this.http.post(`${this.API}/personas`, persona);
  }

  deletePerson(personId){
    return this.http.delete(`${this.API}/personas/${personId}`,
    {responseType: 'text'});
  }

  updatePerson(personId, updatePerson: Persona): Observable<any>{
    return this.http.put(`${this.API}/personas/${personId}`, updatePerson,
    {responseType: 'text'});
  }

}

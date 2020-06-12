import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonsService } from '../../services/persons.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  persona: Persona = {
    id: 0,
    nombre: '',
    apellido: '',
    cedula: 0,
    createdAt: new Date()
  };

  constructor(
    private personSvc: PersonsService
  ) { }

  ngOnInit() {
  }

  savePerson(){
    delete this.persona.id;
    delete this.persona.createdAt;
    this.personSvc.savePerson(this.persona).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    );
  }
}

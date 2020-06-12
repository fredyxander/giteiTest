import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonsService } from '../../services/persons.service';
import { Router, ActivatedRoute } from '@angular/router';

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
    cedula: null,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  edit = false;
  clicked = false;


  constructor(
    private personSvc: PersonsService,
    private route: Router,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // check if person exists
    const params = this.activedRoute.snapshot.params;
    if (params.id){
      this.personSvc.GetPerson(params.id).subscribe(
        res => {
          this.persona = res;
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }

  savePerson(){
    delete this.persona.id;
    delete this.persona.createdAt;
    delete this.persona.updatedAt;
    this.personSvc.savePerson(this.persona).subscribe(
      res => {
        this.route.navigate(['/persons']);
      },
      err => console.error(err)
    );
  }

  updatePerson(){
    delete this.persona.createdAt;
    this.personSvc.updatePerson(this.persona.id, this.persona).subscribe(
      res => {
        this.route.navigate(['/persons']);
      },
      err => console.error(err)
    );
  }

  onSubmit(){
    this.clicked = true;
    if (this.edit){
      this.updatePerson();
    } else{
      this.savePerson();
    }
  }

}

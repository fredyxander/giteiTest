import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../../services/persons.service';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {

  persons: any = [];
  constructor(
    private PersonSvc: PersonsService
  ) { }

  ngOnInit() {
    this.readPersons();
  }

  readPersons(){
    this.PersonSvc.getPersons().subscribe(
      res => {
        this.persons = res;
      },
      err => console.error(err)
    );
  }

  deletePerson(id){
    this.PersonSvc.deletePerson(id).subscribe(
      res => {
        this.readPersons();
      }
    );
  }

}

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
    this.PersonSvc.getPersons().subscribe(
      res => {
        this.persons = res;
        console.log(this.persons);
      },
      err => console.error(err)
    );
  }

}

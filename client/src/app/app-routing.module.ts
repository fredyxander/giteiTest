import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonsListComponent } from './components/persons-list/persons-list.component';
import { PersonFormComponent } from './components/person-form/person-form.component';


const routes: Routes = [
  {path: '', redirectTo: '/persons/add', pathMatch: 'full'},
  {path: 'persons', component: PersonsListComponent},
  {path: 'persons/add', component: PersonFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

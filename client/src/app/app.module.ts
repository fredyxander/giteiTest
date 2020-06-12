import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { PersonsListComponent } from './components/persons-list/persons-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PersonFormComponent,
    PersonsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

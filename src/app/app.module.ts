import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InsertPersonComponent } from './insert-person/insert-person.component';
import { GetPersonsComponent } from './get-persons/get-persons.component';
import { DeletePersonComponent } from './delete-person/delete-person.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertPersonComponent,
    GetPersonsComponent,
    DeletePersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

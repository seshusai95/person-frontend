import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InsertPersonComponent } from './insert-person/insert-person.component';
import { GetPersonsComponent } from './get-persons/get-persons.component';
import { DeletePersonComponent } from './delete-person/delete-person.component';
import { GetPersonComponent } from './get-person/get-person.component';
import { UpdatePersonComponent } from './update-person/update-person.component';

const ROUTES: Routes = [
{path:'', component: InsertPersonComponent},
{path:'getpersonbyid', component: GetPersonComponent},
{path:'getallpersons', component: GetPersonsComponent},
{path:'deleteperson', component: DeletePersonComponent},
{path:'updateperson', component: UpdatePersonComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    InsertPersonComponent,
    GetPersonsComponent,
    DeletePersonComponent,
    GetPersonComponent,
    UpdatePersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

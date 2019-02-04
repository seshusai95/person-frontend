import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'get-persons',
  templateUrl: './get-persons.component.html',
  styleUrls: ['./get-persons.component.css']
})
export class GetPersonsComponent implements OnInit {

  title = 'Get a Person and Get All Persons';
  private apiUrl = 'http://localhost:8080/persons'; 
  
  constructor(private http: Http){ }

  ngOnInit() { }
  
 getPersonById(id){
 
     this.http.get(this.apiUrl+'/'+id).subscribe(
       res => {
       
       console.log("Successfully Obtained Person Based On Id");
       console.log(res);
       },
       err => {
       console.log("Error occured in getPersonById");
       }
       );
 }
 
 getAllPersons(){
  
  this.http.get(this.apiUrl).subscribe(
       res => {
       
       console.log("Successfully Obtained all Persons");
       console.log(res);
       },
       err => {
       console.log("Error occured in getAllPersons");
       }
       );
  }

}

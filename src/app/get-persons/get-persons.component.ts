import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'get-persons',
  templateUrl: './get-persons.component.html',
  styleUrls: ['./get-persons.component.css']
})
export class GetPersonsComponent implements OnInit {

  finalObtainedData;
  title = 'Get All Persons';
  private apiUrl = 'http://localhost:8080/persons'; 
  
  constructor(private http: Http){ }

  ngOnInit() { }
  
 
 
 getAllPersons(){
  
  this.http.get(this.apiUrl).subscribe(
       res => {
       let resStr = JSON.stringify(res);
       let obtainedData = JSON.parse(resStr);
       this.finalObtainedData = JSON.parse(obtainedData._body);
       console.log(this.finalObtainedData);
       console.log("Successfully Obtained all Persons");
       },
       err => {
       console.log("Error occured in getAllPersons");
       }
       );
  }
  }

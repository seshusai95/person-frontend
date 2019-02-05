import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'get-person',
  templateUrl: './get-person.component.html',
  styleUrls: ['./get-person.component.css']
})
export class GetPersonComponent implements OnInit {

  personId: any = 189;
  objectArray=[];
  
  title = 'Get Person By Id';
  private apiUrl = 'http://localhost:8080/persons'; 
  
  constructor(private http: Http){ }

  ngOnInit() {
  }
  
  
  getPersonById(id){
 
     this.http.get(this.apiUrl+'/'+id)
     .subscribe(
       res => {
       let resStr = JSON.stringify(res);
       let obtainedData = JSON.parse(resStr);
       let obtainedObject = JSON.parse(obtainedData._body);
       this.objectArray = Object.values(obtainedObject);
       console.log(this.objectArray);
       console.log("Successfully recieved a person based On Id");
       },
       err => {
       console.log("Error occured in getPersonById");
       }
       );
 }
  
  
  }



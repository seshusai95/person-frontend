import { Component, OnInit } from '@angular/core';
import { Person }    from '../person';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'insert-person',
  templateUrl: './insert-person.component.html',
  styleUrls: ['./insert-person.component.css']
})
export class InsertPersonComponent implements OnInit{
model: Person = new Person('Dr IQ','20','Chuck Overstreet','8166941353');
title = 'Insert Person';
private apiUrl = 'http://localhost:8080/persons';

constructor(private http: Http){ }


ngOnInit() { }


onSubmit() { 
       console.log(this.model);
       this.http.post(this.apiUrl, this.model)
       .subscribe(
       res => {
       
       console.log("Successfully posted");
       console.log(res);
       },
       err => {
       console.log("Error occured");
       }
       
       );

    
    }


}

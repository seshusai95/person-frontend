import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'delete-person',
  templateUrl: './delete-person.component.html',
  styleUrls: ['./delete-person.component.css']
})
export class DeletePersonComponent implements OnInit {

 title = 'Delete a Person';
 private apiUrl = 'http://localhost:8080/persons';
  
  constructor(private http: Http){ }

  ngOnInit() { }

  deletePersonById(id){
  
  this.http.delete(this.apiUrl+'/'+id).subscribe(
       res => {
       
       console.log("Successfully Deleted Person Based On Id");
       console.log(res);
       },
       err => {
       console.log("Error occured in deletePersonById");
       }
       );
  
  }

}

import { Component, OnInit } from '@angular/core';
import { Person }    from '../person';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'insert-person',
  templateUrl: './insert-person.component.html',
  styleUrls: ['./insert-person.component.css']
})
export class InsertPersonComponent implements OnInit{

model: Person = new Person('Dr IQ','20','Chuck Overstreet','8166941353');

title = 'Insert Person';
private apiUrl = 'http://localhost:8080/persons';

constructor(private http: Http, private router: Router){ }


ngOnInit() { }


insertPeron(){ 
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
       this.gotoGetAllPersons();
}

gotoGetAllPersons(){
   this.router.navigate(['/getallpersons']);
}

}

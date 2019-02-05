import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent implements OnInit {


  personId: any = 189;
  phonenumber:any = 8166941353;
  
  title = 'Update a Person';
  private apiUrl = 'http://localhost:8080/persons'; 
  
  constructor(private http: Http, private router: Router){ }

  ngOnInit() {  }
  
  updatePersonById(id:any, phone:any){
  
  this.http.patch(this.apiUrl +'/'+id+'/'+ phone, null).subscribe(
       res => {
       
       console.log("Successfully Updated Person");
       console.log(res);
       },
       err => {
       console.log("Error occured in getAllPersons");
       }
       );
  
       this.gotoGetAllPersons();
  }
  
  gotoGetAllPersons(){
   this.router.navigate(['/getallpersons']);
}

}

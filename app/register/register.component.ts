import { Component, OnInit } from '@angular/core';
import { StudentDataService } from './student-data.service';
import { Student } from './student-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fname:string='';
  mname:string='';
  lname:string='';
  email:string='';
  pass:string='';
  gender:string='';
  dob:Date;
  adhar:number;
  mno:number;
  qua:number;
  img:string='';
  address:string='';
  
  constructor(public _data:StudentDataService) { }

  ngOnInit() {
  }
  add()
{
  let item=new Student(null,this.email,this.pass,this.fname,this.mname,this.lname,this.gender,this.adhar,this.address,this.mno,this.qua,this.img,this.dob,null,2);
  this._data.addStudent(item).subscribe(
        (data:any)=>{
        console.log(data);
        
          alert('Registration Successfull');
          //this._r.navigate(["/newsfeed"]);
        }
      );

}


}

import { Component, OnInit } from '@angular/core';
import { LoginDataService } from './login-data-service.service';
import { Login } from './login-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
stu_email_id:string='';
password:string='';
  constructor(public _data:LoginDataService,public _r:Router) { }

  ngOnInit() {
  }
  onlogin()
  {
    let item=new Login(this.stu_email_id,this.password);
    this._data.getlogin(item).subscribe(
          (data:any)=>{
            console.log(data);
            
          if(data.length==1)
          {
          localStorage.setItem('Email',this.stu_email_id);
            this._r.navigate(["/stuhome"]);
          }
          else{

            alert('something went wrong');
          }
            //this._r.navigate(["/newsfeed"]);
          }
        );
  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stuhome',
  templateUrl: './stuhome.component.html',
  styleUrls: ['./stuhome.component.css']
})
export class StuhomeComponent implements OnInit {
email_id:string='';
  constructor() { }

  ngOnInit() {
    this.email_id=localStorage.getItem('Email');
    
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: any;
  password: any;

  login(formValues: any): void{
    console.log(formValues);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

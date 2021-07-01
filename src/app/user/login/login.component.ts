import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: any;
  password: any;
  mouseoverLogin: boolean = false;

  constructor(private authService: AuthService, private router: Router){}

  login(formValues: any): void{
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['/user/profile']);
  }

  cancel(): void{
    this.router.navigate(['events']);
  }

  ngOnInit(): void {
  }

}

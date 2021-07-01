import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  constructor(private authService: AuthService, private route: Router) {
    let firstName = new FormControl(this.authService.currentUser.firstName);
    let lastName = new FormControl(this.authService.currentUser.lastName);
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName : lastName
    });
  }

  cancel(): void{
    this.route.navigate(['events']);
  }

  saveProfile(formValues: any){
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
    this.route.navigate(['events']);
  }
  ngOnInit(): void {
  }

}

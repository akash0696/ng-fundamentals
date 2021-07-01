import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;
  constructor(private authService: AuthService, private route: Router) {
    this.firstName = new FormControl(this.authService.currentUser.firstName, Validators.required);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName : this.lastName
    });
  }

  ngOnInit(): void {
  }

  cancel(): void{
    this.route.navigate(['events']);
  }

  saveProfile(formValues: any): void{
    if (this.profileForm.valid){
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.route.navigate(['events']);
    }
  }

  validateLastName(): boolean{
    return this.lastName.valid || this.lastName.untouched;
  }

  validateFirstName(): boolean{
    return this.firstName.valid || this.firstName.untouched;
  }




}

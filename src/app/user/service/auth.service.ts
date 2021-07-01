import { Injectable } from '@angular/core';
import { IUser } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser!: IUser;
  loginUser(userName: string, password: string): void{
    this.currentUser = {
      id: 1,
      userName: 'userName',
      firstName: 'Akash',
      lastName: 'Mehta',
    }
  }
  constructor() { }

  isAuthenticated(): boolean{
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string){
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}

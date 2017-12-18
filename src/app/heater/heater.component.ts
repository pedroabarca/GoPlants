import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {UserService} from '../shared/user.service';

@Component({
  selector: 'app-heater',
  templateUrl: './heater.component.html',
  styleUrls: ['./heater.component.css']
})
export class HeaterComponent implements OnInit {
  isLoggedIn: boolean = false;
  name: string;
  uid: string;
  email: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(userData => {
      // we are logged in
      if (userData && userData.emailVerified) {
        this.isLoggedIn = true;
        const user = this.userService.getProfile();
        this.name = user.name;
        this.email = user.email;
        this.uid = user.uid;
      }else {
        this.isLoggedIn = false;
      }
    });
  }

  onLogout() {
    console.log('true');
    firebase.auth().signOut()
      .then(() => {
        this.userService.destroy();
        this.isLoggedIn = false;
      });
  }

}

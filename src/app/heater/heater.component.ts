import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-heater',
  templateUrl: './heater.component.html',
  styleUrls: ['./heater.component.css']
})
export class HeaterComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor() { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(userData => {
      // we are logged in
      if (userData && userData.emailVerified) {
        this.isLoggedIn = true;
      }else {
        this.isLoggedIn = false;
      }
    });

  }

}

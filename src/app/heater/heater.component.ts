import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-heater',
  templateUrl: './heater.component.html',
  styleUrls: ['./heater.component.css']
})
export class HeaterComponent implements OnInit {
  isLoggedin: boolean = false;
  constructor() { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(userData=>{
      if (userData && userData.emailVerified){

      }
    })

  }

}

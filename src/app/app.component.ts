import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'GOPLANT$';

  ngOnInit() {
    const config = {
      apiKey: 'AIzaSyC2Q5D0zCfbR1dAN73Ipsv3QHLFfKIHRvM',
      authDomain: 'goplantscr.firebaseapp.com',
      databaseURL: 'https://goplantscr.firebaseio.com',
      projectId: 'goplantscr',
      storageBucket: 'goplantscr.appspot.com',
      messagingSenderId: '164100884397'
    };
    firebase.initializeApp(config);
  }


}


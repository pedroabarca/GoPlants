import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import * as firebase from 'firebase';
import {NotificationService} from '../../shared/notification.service';
import {MyFireService} from '../../shared/myfire.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private notifier: NotificationService, private myFire: MyFireService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(userData => {
        if (userData.emailVerified) {
          return this.myFire.getUserData(userData.uid);

        }else {
          const message = 'Su email no ha sido verificado';
          this.notifier.display('error', message);
          firebase.auth().signOut();
        }

      })
      .then(userDataFromDataBase => {
        if (userDataFromDataBase) {
          console.log(userDataFromDataBase);

        }
      })
      .catch(err => {
        this.notifier.display('error', err.message);
      });


  }

}

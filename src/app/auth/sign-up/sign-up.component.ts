import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import * as firebase from 'firebase';
import {NotificationService} from "../../shared/notification.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private notifier: NotificationService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const fullname = form.value.fullname;
    const  email = form.value.email;
    const password = form.value.password;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(userData => {
        userData.sendEmailVerification();
        const message = `Se ha enviado un email de verificación a ${email}`;
        this.notifier.display('success', message);

        return firebase.database().ref('users/' + userData.uid).set({
          email: email,
          name: fullname,
          uid: userData.uid,
          registrationDate: new Date().toString()
        })
          .then( () => {
            firebase.auth().signOut();
          });
      })
      .catch(err => {
        this.notifier.display('error', err.message);
      });
  }

}

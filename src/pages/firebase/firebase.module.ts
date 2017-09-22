import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirebasePage } from './firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyB7yls1afDUIjg6lnWAdh5_WeJBMczEa0Q",
  authDomain: "cursocatolica-c96f9.firebaseapp.com",
  databaseURL: "https://cursocatolica-c96f9.firebaseio.com",
  projectId: "cursocatolica-c96f9",
  storageBucket: "cursocatolica-c96f9.appspot.com",
  messagingSenderId: "309012234916"
};

@NgModule({
  declarations: [
    FirebasePage,
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    IonicPageModule.forChild(FirebasePage)
  ]
})
export class FirebasePageModule {}

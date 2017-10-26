import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirebasePage } from './firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
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

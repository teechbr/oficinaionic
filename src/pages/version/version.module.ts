import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VersionPage } from './version';
import { AppVersion } from '@ionic-native/app-version';

@NgModule({
  declarations: [
    VersionPage,
  ],
  imports: [
    IonicPageModule.forChild(VersionPage),
  ],
  providers: [
    AppVersion
  ]
})
export class VersionPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WebservicePage } from './webservice';

@NgModule({
  declarations: [
    WebservicePage,
  ],
  imports: [
    IonicPageModule.forChild(WebservicePage),
  ],
})
export class WebservicePageModule {}

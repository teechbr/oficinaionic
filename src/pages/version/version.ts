import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';

/**
 * Generated class for the VersionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-version',
  templateUrl: 'version.html',
})
export class VersionPage {
  nome:any;
  pack:any;
  versioncode:any;
  versionnumber:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private appVersion: AppVersion) {
    this.appVersion.getAppName().then(name => {this.nome = name});
    this.appVersion.getPackageName().then(pack => {this.pack = pack});
    this.appVersion.getVersionCode().then(code => {this.versioncode = code});
    this.appVersion.getVersionNumber().then(number => {this.versionnumber = number});;
  }

}

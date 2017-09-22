import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebserviceProvider } from '../../providers/webservice/webservice';

/**
 * Generated class for the WebservicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-webservice',
  templateUrl: 'webservice.html',
})
export class WebservicePage {

  public cities:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public wsProvider: WebserviceProvider) {

  }

  ionViewDidLoad() {
      this.wsProvider.getAll().subscribe(cities =>{
        this.cities = cities.json().cities;
      });
  }

}

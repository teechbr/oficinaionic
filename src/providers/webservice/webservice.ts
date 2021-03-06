import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the WebserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebserviceProvider {

  constructor(public http: Http) {
    console.log('Hello WebserviceProvider Provider');
  }

  getAll(){
    return this.http.get('https://xbus.com.br/api/cities.json');
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddLocationPage } from '../add-location/add-location'

/*
  Generated class for the Locations page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-locations',
  templateUrl: 'locations.html'
})
export class LocationsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Locations Page');
  }

  add() {
    this.navCtrl.push(AddLocationPage);
  }

}
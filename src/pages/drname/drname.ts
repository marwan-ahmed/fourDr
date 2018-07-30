import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShowdrnamePage } from '../showdrname/showdrname';

/**
 * Generated class for the DrnamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-drname',
  templateUrl: 'drname.html',
})
export class DrnamePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DrnamePage');
  }


  goToDrName(){
    this.navCtrl.push(ShowdrnamePage)
  }
}

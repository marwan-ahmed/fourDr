import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { DrnamePage } from '../drname/drname';
import { AboutappPage } from '../aboutapp/aboutapp';
import { AdreessmapPage } from '../adreessmap/adreessmap';
import { PhonesPage } from '../phones/phones';
import { TimePage } from '../time/time';
import { ShowdrnamePage } from '../showdrname/showdrname';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  // 

  goDrName(){
    this.navCtrl.push(DrnamePage)
  }

goAdreessmap() {
  this.navCtrl.push(AdreessmapPage)
}
  goTime() {
    this.navCtrl.push(TimePage)
  }
  goPhones() {
    this.navCtrl.push(PhonesPage)
  }
  goAboute() {
    this.navCtrl.push(AboutappPage)
  }
}

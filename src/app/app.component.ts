import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

// import { DrnamePage } from '../pages/drname/drname';
// import { AboutappPage } from '../pages/aboutapp/aboutapp';
// import { AdreessmapPage } from '../pages/adreessmap/adreessmap';
// import { PhonesPage } from '../pages/phones/phones';
// import { TimePage } from '../pages/time/time';
// import { ShowdrnamePage } from './../pages/showdrname/showdrname';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}


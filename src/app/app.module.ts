import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { DrnamePage } from '../pages/drname/drname';
import { AboutappPage } from '../pages/aboutapp/aboutapp';
import { AdreessmapPage } from '../pages/adreessmap/adreessmap';
import { PhonesPage } from '../pages/phones/phones';
import { TimePage } from '../pages/time/time';
import { ShowdrnamePage } from './../pages/showdrname/showdrname';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    
    DrnamePage,
    AboutappPage,
    AdreessmapPage,
    PhonesPage,
    ShowdrnamePage,
    TimePage
    
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    
    DrnamePage,
    AboutappPage,
    AdreessmapPage,
    PhonesPage,
    ShowdrnamePage,
    TimePage
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrnamePage } from './drname';

@NgModule({
  declarations: [
    DrnamePage,
  ],
  imports: [
    IonicPageModule.forChild(DrnamePage),
  ],
})
export class DrnamePageModule {}

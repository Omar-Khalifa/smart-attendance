import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SnotificationPage } from './snotification';

@NgModule({
  declarations: [
    SnotificationPage,
  ],
  imports: [
    IonicPageModule.forChild(SnotificationPage),
  ],
})
export class SnotificationPageModule {}

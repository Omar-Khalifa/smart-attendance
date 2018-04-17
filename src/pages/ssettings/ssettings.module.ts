import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SsettingsPage } from './ssettings';

@NgModule({
  declarations: [
    SsettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(SsettingsPage),
  ],
})
export class SsettingsPageModule {}

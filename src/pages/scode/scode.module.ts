import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScodePage } from './scode';

@NgModule({
  declarations: [
    ScodePage,
  ],
  imports: [
    IonicPageModule.forChild(ScodePage),
  ],
})
export class ScodePageModule {}

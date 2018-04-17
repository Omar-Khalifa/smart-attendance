import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignTePage } from './sign-te';

@NgModule({
  declarations: [
    SignTePage,
  ],
  imports: [
    IonicPageModule.forChild(SignTePage),
  ],
})
export class SignTePageModule {}

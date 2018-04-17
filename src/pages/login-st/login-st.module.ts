import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginStPage } from './login-st';

@NgModule({
  declarations: [
    LoginStPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginStPage),
  ],
})
export class LoginStPageModule {}

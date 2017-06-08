import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmatoPage } from './amato';

@NgModule({
  declarations: [
    AmatoPage,
  ],
  imports: [
    IonicPageModule.forChild(AmatoPage),
  ],
  exports: [
    AmatoPage
  ]
})
export class AmatoPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CebolaisPage } from './cebolais';

@NgModule({
  declarations: [
    CebolaisPage,
  ],
  imports: [
    IonicPageModule.forChild(CebolaisPage),
  ],
  exports: [
    CebolaisPage
  ]
})
export class CebolaisPageModule {}

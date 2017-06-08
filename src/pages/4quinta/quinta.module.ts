import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuintaPage } from './quinta';

@NgModule({
  declarations: [
    QuintaPage,
  ],
  imports: [
    IonicPageModule.forChild(QuintaPage),
  ],
  exports: [
    QuintaPage
  ]
})
export class QuintaPageModule {}

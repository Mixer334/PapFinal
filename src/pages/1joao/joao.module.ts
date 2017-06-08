import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JoaoPage } from './joao';

@NgModule({
  declarations: [
    JoaoPage,
  ],
  imports: [
    IonicPageModule.forChild(JoaoPage),
  ],
  exports: [
    JoaoPage
  ]
})
export class JoaoPageModule {}

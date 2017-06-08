import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ValongoPage } from './valongo';

@NgModule({
  declarations: [
    ValongoPage,
  ],
  imports: [
    IonicPageModule.forChild(ValongoPage),
  ],
  exports: [
    ValongoPage
  ]
})
export class ValongoPageModule {}

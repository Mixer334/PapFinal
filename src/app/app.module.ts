import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AboutPage } from '../pages/about/about';
import { ContactoPage } from '../pages/contacto/contacto';
import { CebolaisPage } from '../pages/2cebolais/cebolais';
import { AmatoPage } from '../pages/3amato/amato';
import { JoaoPage } from '../pages/1joao/joao';
import { ValongoPage } from '../pages/5valongo/valongo';
import { QuintaPage } from '../pages/4quinta/quinta';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    ContactoPage,
    QuintaPage,
    ValongoPage,
    JoaoPage,
    AmatoPage,
    CebolaisPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    ContactoPage,
    QuintaPage,
    ValongoPage,
    JoaoPage,
    AmatoPage,
    CebolaisPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

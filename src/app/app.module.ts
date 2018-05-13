import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistroPage } from '../pages/registro/registro';
import { LoginPage } from '../pages/login/login';
import { ToastProvider } from '../providers/toast/toast';
import { HandlerProvider } from '../providers/handler/handler';
import { BifrostProvider } from '../providers/bifrost/bifrost';
import { HummerProvider } from '../providers/hummer/hummer';
import { ChatPage } from '../pages/chat/chat';
import { MenuPage } from '../pages/menu/menu';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroPage,
    ChatPage,
    MenuPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroPage,
    ChatPage,
    MenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ToastProvider,
    HandlerProvider,
    BifrostProvider,
    HummerProvider
  ]
})
export class AppModule {}

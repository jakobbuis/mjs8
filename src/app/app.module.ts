import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { PlayerPage } from '../pages/player/player';
import { RemoteControlService } from '../services/remote_control';

@NgModule({
  declarations: [
    MyApp,
    PlayerPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PlayerPage,
  ],
  providers: [
    RemoteControlService
  ]
})
export class AppModule {}

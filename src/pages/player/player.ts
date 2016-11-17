import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RemoteControlService } from '../../services/remote_control';

@Component({
  selector: 'page-player',
  templateUrl: 'player.html'
})
export class PlayerPage {

  constructor(public navCtrl: NavController, private remote : RemoteControlService) {}

  backward() {
    this.remote.backward();
  }

  forward() {
    this.remote.forward();
  }

  play() {
    this.remote.play();
  }

  pause() {
    this.remote.pause();
  }

}

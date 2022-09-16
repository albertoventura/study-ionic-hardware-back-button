import { Component } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private alertcontroller: AlertController,
  ) {
    this.initializeApp();
    this.backButtonEvent();
  }
  initializeApp() {
    this.platform.ready().then(()=>{

    });
  }
  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(10, ()=> {
      this.backButtonAlert();
    });
  }
  async backButtonAlert() {
    const alert = await this.alertcontroller.create({
      message: 'you just pressed the back button!'
    });
    await alert.present();
  }
}

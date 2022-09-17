import { Component, ViewChild} from '@angular/core';
import { AlertController, Platform, IonRouterOutlet } from '@ionic/angular';
import { Location } from '@angular/common';
/* import { Plugins } from '@capacitor/core';
const { app } = Plugins; */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonRouterOutlet, {static: true}) routerOutlet: IonRouterOutlet;
  constructor(
    private platform: Platform,
    private alertcontroller: AlertController,
    private location: Location,
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
      if(!this.routerOutlet.canGoBack()){
        this.backButtonAlert();
      } else {
        this.location.back();
      }
    });
  }
  async backButtonAlert() {
    const alert = await this.alertcontroller.create({
      message: 'you just pressed the back button!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Close App',
          handler: () => {
            navigator['app'].exitApp();
        }
      }]
    });
    await alert.present();
  }
}

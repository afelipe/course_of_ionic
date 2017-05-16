import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Se ha guardado la imagen',
      duration: 2000,
      position: position
    });

    toast.present(toast);
}

}

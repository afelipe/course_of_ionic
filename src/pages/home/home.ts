import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController, ModalController } from 'ionic-angular';
import { SlidesPage } from "./slides";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public modalCtrl: ModalController,) {

  }

  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Se ha guardado la imagen',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

  takePhoto(){

  }

  showAlbum(){
    let modal = this.modalCtrl.create(SlidesPage);
    
    modal.present();
  }

}

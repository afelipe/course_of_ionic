import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController, ViewController } from 'ionic-angular';

@Component({
  selector: 'slides',
  templateUrl: 'slides.html'
})
export class SlidesPage {

    constructor(public navCtrl: NavController, public toastCtrl: ToastController, public vctrl : 
    ViewController) {

    }

    cerrar(){
        this.vctrl.dismiss();
    }
}

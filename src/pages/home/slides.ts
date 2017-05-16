import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController, ViewController, ActionSheetController, Platform } from 'ionic-angular';

@Component({
  selector: 'slides',
  templateUrl: 'slides.html'
})
export class SlidesPage {

    constructor(public navCtrl: NavController, public toastCtrl: ToastController, public vctrl : 
        ViewController, public actionsheetCtrl: ActionSheetController,
        public platform: Platform) {

    }

    cerrar(){
        this.vctrl.dismiss();
    }

    openMenu( imagen: string){
        let actionSheet = this.actionsheetCtrl.create({
            title: 'Compartir foto',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                text: 'Facebook',
                //role: 'destructive',
                icon: !this.platform.is('ios') ? 'logo-facebook' : null,
                handler: () => {
                    console.log('Facebook clicked');
                }
                },
                {
                text: 'Twitter',
                icon: !this.platform.is('ios') ? 'logo-twitter' : null,
                handler: () => {
                    console.log('Twitter clicked');
                }
                },
                {
                text: 'Whatsapp',
                icon: !this.platform.is('ios') ? 'logo-whatsapp' : null,
                handler: () => {
                    console.log('Whatsapp clicked');
                }
                
                }
            ]
            });
            actionSheet.present();
    }
}


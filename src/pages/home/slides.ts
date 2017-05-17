import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController, ViewController, ActionSheetController, Platform } from 'ionic-angular';
import { ViewChild } from '@angular/core';

import { Slides, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'slides',
  templateUrl: 'slides.html'
})
export class SlidesPage {

    @ViewChild(Slides) slides: Slides;

     slidesArray = [
       
    ];


    constructor(public navCtrl: NavController, public toastCtrl: ToastController, public vctrl : 
        ViewController, public actionsheetCtrl: ActionSheetController,
        public platform: Platform, private socialSharing: SocialSharing, public navParams:NavParams) {
            this.slidesArray = navParams.get("slides");
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
                icon: !this.platform.is('ios') ? 'logo-facebook' : null,
                handler: () => {
                    //let currentIndex = this.slides.getActiveIndex();
                    //console.log("Current index in Facebook", currentIndex);
                    console.log(this.slidesArray[this.slides.getActiveIndex()].title);

                    let titulo = this.slidesArray[this.slides.getActiveIndex()].title;
                    let imagen = this.slidesArray[this.slides.getActiveIndex()].image;

                    this.socialSharing.canShareVia("com.facebook.katana","","", "","").then(() => { 
                        //alert("facebook ok");
                    }).catch(() => {alert("facebook error");});

                   this.socialSharing.shareViaFacebook(titulo, imagen, "url");
                }
                },
                {
                text: 'Twitter',
                icon: !this.platform.is('ios') ? 'logo-twitter' : null,
                handler: () => {
                    console.log('Twitter clicked');
                    console.log(this.slidesArray[this.slides.getActiveIndex()].title);
                    
                    let titulo = this.slidesArray[this.slides.getActiveIndex()].title;
                    let imagen = this.slidesArray[this.slides.getActiveIndex()].image;

                    this.socialSharing.canShareVia("com.twitter.android","","", "","").then(() => { 
                        //alert("Twitter ok");
                    }).catch(() => {alert("Twitter error");});

                    this.socialSharing.shareViaTwitter(titulo, imagen, "url");
                }
                },
                {
                text: 'Whatsapp',
                icon: !this.platform.is('ios') ? 'logo-whatsapp' : null,
                handler: () => {
                    console.log('Whatsapp clicked');
                    let titulo = this.slidesArray[this.slides.getActiveIndex()].title;
                    let imagen = this.slidesArray[this.slides.getActiveIndex()].image;

                    this.socialSharing.canShareVia("com.whatsapp","","", "","").then(() => { 
                        //alert("Whatsapp ok");
                    }).catch(() => {alert("Whatsapp error");});

                    this.socialSharing.shareViaWhatsApp(titulo, null, null);
                }
                
                }
            ]
            });
            actionSheet.present();
    }

}


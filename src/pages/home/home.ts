import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {Camera} from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  text: string;
  position: string;
  public base64Image: string;
  
  constructor(public navCtrl: NavController, public toastCtrl: ToastController,
              private camera:Camera , private geolocation: Geolocation) {
    console.log('Hello HomeComponent Component');
    this.text = 'Hello World';
    this.geolocation.getCurrentPosition().then((resp) => {
       // resp.coords.latitude
      // resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
    // data can be a set of coordinates, or an error (if an error occurred).
    this.position = " "+ data.coords.latitude +" "+ data.coords.longitude;
    // data.coords.longitude
    });
  }
  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Se ha guardado la imagen',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

  showAlbum(){
    
  }


 takePhoto(){
 
   this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }
  

}
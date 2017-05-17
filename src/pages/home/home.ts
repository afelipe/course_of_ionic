import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera} from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { ToastController, ModalController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { SlidesPage } from './slides';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  text: string;
  position: string;
  public base64Image: string;
  slidesTo:any[] = [];  
 
 constructor(public navCtrl: NavController, public toastCtrl: ToastController, 
     public modalCtrl: ModalController, private camera:Camera , private geolocation: Geolocation,
     private imagePicker: ImagePicker ) {
 
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
     let options = {
    maximumImagesCount: 8,
    width: 500,
    height: 500,
    quality: 75
  }
 

  this.imagePicker.getPictures(options).then(
    
   //file_uris => this.modalCtrl.create(SlidesPage, {slides: file_uris})
        
   (results) => {
                // Loop through acquired images 
        for (var i = 0; i < results.length; i++) {
     
            let slidesDetailTmp = {
                title:"",
                description:"",
                image: ""+results[i]
            };
 
            this.slidesTo.push(slidesDetailTmp); // Print image URI
        }
        
        this.showModal( this.slidesTo);
       
    }, (error) => {
      alert('error');
        console.log('Error: ' + JSON.stringify(error));    // In case of error
    }
    );    
  //TODO añadir slides por parametro
       
    }

showModal(slidesTo:any[]){
      let modal = this.modalCtrl.create(SlidesPage,{slides:slidesTo});
        modal.present();
}
takePhoto(){
 
   this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000,
        saveToPhotoAlbum:true
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }




}
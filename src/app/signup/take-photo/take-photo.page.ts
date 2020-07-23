import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../user/user.service';
import { Router } from '@angular/router';
import { MenuController, LoadingController, AlertController } from '@ionic/angular';
import { StorageService } from '../../services/storage.service';
import { RegistrationService } from '../registration.service';

import { Plugins, CameraResultType, CameraSource, FilesystemDirectory, Filesystem, Capacitor, Camera} from '@capacitor/core'
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ToastService } from '../../services/toast.service';
import { BluspecUserModel } from '../../user/profile/user-profile.model';

//http://masteringionic.com/blog/2018-03-26-developing-cross-platform-apps-with-ionic-capacitor-part-2/

@Component({
  selector: 'app-take-photo',
  templateUrl: './take-photo.page.html',
  styleUrls: ['./take-photo.page.scss'],
})
export class TakePhotoPage implements OnInit {
  takePhotoForm: FormGroup;
  cachedData: BluspecUserModel;
  image:SafeResourceUrl;
  imageUrl:string;
  avatarImg = "assets/images/avatar.jpg";
  
  constructor(private userService: UserService,
    public router: Router,
    public menu: MenuController,
    private domSanitizer: DomSanitizer,
    public loadingController: LoadingController,
    private alertController: AlertController,
    private toastService: ToastService,
    private registrationService: RegistrationService,
    public storageService: StorageService) { }

  ngOnInit() {
    this.menu.enable(false);
    this.image = this.avatarImg;

try{
  this.registrationService.getCachedData().then(res => {
    if (res) {
        //console.log("Direct fetched cache: "+JSON.stringify(res));
        this.cachedData = res;
        this.recoverCache();
    }
    });
}catch(Exception){
console.log("########## Exception caching saved data ##########");
}

       this.takePhotoForm = new FormGroup({
      about: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(30)])
    });
}

  submitPhoto() {
    this.nextStep();
  }

//   async takePhoto() {
//    try{
//     const {Camera} = Plugins;
//     const result = await Camera.getPhoto({
//       quality:75,
//       allowEditing:true,
//       source:CameraSource.Camera,
//       resultType:CameraResultType.Base64
//     });
 
//     this.image = this.domSanitizer.bypassSecurityTrustResourceUrl(result&& result.base64String);
//     this.imageUrl = this.image.toString();
//     this.toastService.presentToast("Captured Image : "+this.imageUrl);
//    }catch(Error){
// this.toastService.presentToast("Error while capturing Image : "+Error.message);
//    }
//   }

async takePhoto(){
  const options = {
    resultType: CameraResultType.Uri
  };
  Camera.getPhoto(options).then(
    photo => {
      Filesystem.readFile({
        path: photo.path
      }).then(
        result => {
          let date = new Date(),
            time = date.getTime(),
            fileName = time + ".jpeg";
            this.toastService.presentToast("Captured Image Name: "+fileName);
            Filesystem.writeFile({
            data: result.data,
            path: fileName,
            directory: FilesystemDirectory.Data
          }).then(
            () => {
              Filesystem.getUri({
                directory: FilesystemDirectory.Data,
                path: fileName
              }).then(
                result => {
                  let path = Capacitor.convertFileSrc(result.uri);
                  console.log("CATURE LOG: "+path);
                },
                err => {
                  console.log("CATURE LOG ERR: "+err);
                }
              );
            },
            err => {
              console.log("CATURE LOG ERR: "+err);
            }
          );
        },
        err => {
          console.log("CATURE LOG ERR: "+err);
        }
      );
    },
    err => {
      console.log("CATURE LOG ERR: "+err);
    }
  );

}


  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      duration: 5000,
      animated:true,
      spinner: "bubbles",
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  nextStep(){
      if(this.takePhotoForm.valid){
        if(this.cachedData !== undefined){
          this.cachedData.about = this.takePhotoForm.value.about;
          this.cachedData.user_image = this.imageUrl;
          this.registrationService.setCachedData(this.cachedData);
        }else{
          //this.toastService.presentToast("No saved data passed.");
        }
        this.router.navigate(['registration/personal-profile']);
      }else{
        if(this.takePhotoForm.value.about ==""){
          this.presentAlert("Add Brief Description", "", "You must add a short description about you.");
        }
      }
  }

  prevStep(){
    this.router.navigate(['getting-started']);
  }

  async presentAlert(title:string, subtitle:string, message:string) {
    const alert = await this.alertController.create({
      header: title,
      subHeader: subtitle,
      message: message,
      animated:true,
      backdropDismiss:false,
      buttons: ['OK']
    });
    await alert.present();
  }

  recoverCache(){
    this.takePhotoForm.controls.about.setValue(this.cachedData.about);
    //this.cachedData.image.setValue(this.cachedData.image);
  }

}

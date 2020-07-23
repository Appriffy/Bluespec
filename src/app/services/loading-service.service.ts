import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingServiceService {
//https://stackoverflow.com/questions/52574448/ionic-4-loading-controller-dismiss-is-called-before-present-which-will-ke
  isLoading = false;

  constructor(public loadingController: LoadingController) { }

  async present(message:string) {
    this.isLoading = true;
    return await this.loadingController.create({
       animated:true,
       spinner: "bubbles",
       message: message,
       translucent: true,
       cssClass: 'custom-class custom-loading'
    }).then(a => {
      a.present().then(() => {
        //console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('Abort Loading'));
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss();
    //.then(() => console.log('Dismissed'))
  }
}

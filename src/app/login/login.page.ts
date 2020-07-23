import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { AuthConstants } from '../config/AuthConstants';
import { ToastService } from '../services/toast.service';
import { LoadingController } from '@ionic/angular';
import { LocalUser } from '../dbmodels/local-user';
import { UserProfileModel } from '../user/profile/user-profile.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: [
    './styles/login.page.scss'
  ]
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  localUser: LocalUser;
  myDetailProfile: UserProfileModel;
  //Service based sessions
  userToChcek: any;
  userDataDebug : string;
  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };

  constructor(
    public router: Router,
    public menu: MenuController,
private authService: AuthService,
private toastService: ToastService,
public loadingController: LoadingController
  ) {
    this.loginForm = new FormGroup({
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      'password': new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ]))
    });
  }

  ngOnInit(): void {
    this.menu.enable(false);
    //New Way
    this.authService.invokeLoginEvent.subscribe(value => {
    this.userToChcek = value;
    this.userDataDebug = JSON.stringify(this.userToChcek);
    console.log("###### LOGIN SUCCESSFUL ########"+this.userDataDebug);
    });

    this.authService.getAuthCache().then(authData=>{
      if(authData){
      //alert("Already logged In!!!");
      this.router.navigate(['/welcome']);
      }
    });

  }

  doLogin(): void {
    this.presentLoadingWithOptions();
    var postData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
      };
      console.log('Requesting Login with '+JSON.stringify(this.loginForm.value)+' OR '+postData);
    if(true){
      this.authService.login(postData).subscribe(
        (res: any) => {
        if (!res.error) {   
        try {
          if(AuthConstants.DEV_MODE){
            console.log("##### RECEIVED LOGIN RESPONSE ######: "+JSON.stringify(res)); 
           } 
          //this.localUser = JSON.parse(res.userData);  
          this.localUser = res.userData;       
          this.userDataDebug = JSON.stringify(this.localUser);
          this.authService.setAuthData(this.localUser);
          this.myDetailProfile = res.myProfile;  
          this.authService.setMyFullProfile(this.myDetailProfile);
        } catch (Exception) {
        //alert(Exception.message); 
        if(AuthConstants.DEV_MODE){
          this.toastService.presentToast(Exception.message);
        }else{
          this.toastService.presentToast("There was an error authenticating your credentials. Please try again.");
        }
        }
        this.toastService.presentToast(res.message);
        this.router.navigate(['/welcome']);
        } else {
          this.loadingController.dismiss();
          this.toastService.presentToast(res.message);
        }
        },
        (error: any) => {
          this.loadingController.dismiss();
        this.toastService.presentToast('Looks like there is a Network Issue.'+error.message);
        }
        );
    }

  }

  goToForgotPassword(): void {
    console.log('redirect to forgot-password page');
  }

  doFacebookLogin(): void {
    console.log('facebook login');
    this.router.navigate(['app/categories']);
  }

  doGoogleLogin(): void {
    console.log('google login');
    this.router.navigate(['app/categories']);
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

}

import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { SplashScreen } = Plugins;
import { StorageService } from './services/storage.service';
import { LocalUser } from './dbmodels/local-user';
import { AuthConstants } from './config/AuthConstants';
import { Router } from '@angular/router';
import { MasterService } from './services/master.service';
import { UserService } from './user/user.service';
import { AuthService } from './services/auth.service';
import { ToastService } from './services/toast.service';
import { MenuController } from '@ionic/angular';
import { SyncService } from './services/sync.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [
    './side-menu/styles/side-menu.scss',
    './side-menu/styles/side-menu.shell.scss',
    './side-menu/styles/side-menu.responsive.scss'
  ]
})

export class AppComponent implements OnInit{
  workStatus = true;
  workStatusInfo = "Available For Job";
  selectedStatus = "Online";
  localUser: LocalUser;
  postData: any;
  apiKey: any;
  toggleState(): void {
    this.workStatus = !this.workStatus;
    if(this.workStatus){
      this.workStatusInfo = "Available To Work.";
    }else{
      this.selectedStatus = "Offline";
      this.workStatusInfo = "Currently Offline.";
    }

    this.postData = {
      user_id:  this.localUser.id,
      status: this.selectedStatus
    }
    this.userService.updateOnlineStatus(this.apiKey, this.postData).subscribe(
      (res: any) => {
      if (!res.error) {
      try {
       //alert(JSON.stringify(res.message));
       this.toastService.presentToast(res.message); 
      } catch (Exception) {
      alert(Exception.message); 
      } 
      } else {
        alert(JSON.stringify("Else::: "+res.message));
      }
      },
      (error: any) => {
      //   this.loadingController.dismiss();
      // this.toastService.presentToast('Looks like there is a Network Issue.');
      alert(error.message); 
      }
      );
    this.toastService.presentToast(this.workStatusInfo);
  }


  visitorPages = [
    {
      title: 'Home',
      url: '/welcome',
      icon: './assets/sample-icons/side-menu/home.svg'
    },
    {
      title: 'Getting Started',
      url: '/getting-started',
      icon: './assets/sample-icons/side-menu/getting-started.svg'
    },
    {
      title: 'Bluspec For Grafters',
      url: '/walkthrough',
      icon: './assets/sample-icons/side-menu/people.svg'
    },
    {
      title: 'Bluspec for Employers',
      url: '/recruiter-walkthrough',
      icon: './assets/sample-icons/side-menu/recruiter.svg'
    },
    {
      title: 'Sign Up',
      url: '/auth/signup',
      icon: './assets/sample-icons/side-menu/logout.svg'
    }
  ];


  grafterPages = [
    {
      title: 'Home',
      url: '/welcome',
      icon: './assets/sample-icons/side-menu/home.svg'
    },
    {
      title: 'Find Jobs',
      url: '/job-requests',
      icon: './assets/sample-icons/side-menu/search.svg'
    },
    {
      title: 'My Jobs',
      url: '/jobs/orders',
      icon: './assets/sample-icons/side-menu/briefcase.svg'
    },
    {
      title: 'Sent Offers',
      url: '/jobs/applications',
      icon: './assets/sample-icons/side-menu/offers-sent.svg'
    },
    {
      title: 'Chat',
      url: '/coming-soon',
      icon: './assets/sample-icons/side-menu/chat.svg'
    },
    {
      title: 'Notifications',
      url: 'notifications',
      icon: './assets/sample-icons/side-menu/notifications.svg'
    }
  ];

  accountPages = [
    {
      title: 'My Profile',
      url: '/people/profile',
      icon: './assets/sample-icons/side-menu/profile.svg'
    },
    // {
    //   title: 'Getting Started',
    //   url: '/getting-started',
    //   icon: './assets/sample-icons/side-menu/getting-started.svg'
    // },
    {
      title: 'Logout',
      url: '/auth/logout',
      icon: './assets/sample-icons/side-menu/logout.svg'
    }
  ];

  recuiterPages = [
    {
      title: 'Home',
      url: '/welcome',
      icon: './assets/sample-icons/side-menu/home.svg'
    },
    {
      title: 'My Dashboard',
      url: '/employer-dashboard',
      icon: './assets/sample-icons/side-menu/dashboard.svg'
    },
    {
      title: 'Find Professionals',
      url: '/people/listing/grafters',
      icon: './assets/sample-icons/side-menu/people.svg'
    },
    {
      title: 'Manage Jobs',
      url: '/jobs/manager',
      icon: './assets/sample-icons/side-menu/orders.svg'
    },
    {
      title: 'Post New Job',
      url: '/post-new-job',
      icon: './assets/sample-icons/side-menu/briefcase.svg'
    },
    {
      title: 'My Companies',
      url: '/companies/manager',
      icon: './assets/sample-icons/side-menu/business.svg'
    },
    {
      title: 'Chat',
      url: '/coming-soon',
      icon: './assets/sample-icons/side-menu/chat.svg'
    },
    {
      title: 'Notifications',
      url: 'notifications',
      icon: './assets/sample-icons/side-menu/notifications.svg'
    }
  ];

  adminPages = [
    {
      title: 'Home',
      url: '/welcome',
      icon: './assets/sample-icons/side-menu/home.svg'
    },
    // {
    //   title: 'Registration Process',
    //   url: '/take-photo',
    //   icon: './assets/sample-icons/side-menu/profile.svg'
    // },
    // {
    //   title: 'Persnal Profile',
    //   url: '/personal-profile',
    //   icon: './assets/sample-icons/side-menu/profile.svg'
    // },
    // {
    //   title: 'Professional Profile',
    //   url: '/professional-profile',
    //   icon: './assets/sample-icons/side-menu/profile.svg'
    // },
    // {
    //   title: 'Set Location',
    //   url: '/set-location',
    //   icon: './assets/sample-icons/side-menu/profile.svg'
    // },
    // {
    //   title: 'User Map',
    //   url: '/user-map-listing',
    //   icon: './assets/sample-icons/side-menu/profile.svg'
    // },
    
    {
      title: 'Dashboard',
      url: '/dashboard/summary',
      icon: './assets/sample-icons/side-menu/dashboard.svg'
    },
    {
      title: 'Notifications',
      url: 'notifications',
      icon: './assets/sample-icons/side-menu/notifications.svg'
    },
    {
      title: 'Manage Grafters',
      url: '/people/listing/grafters',
      icon: './assets/sample-icons/side-menu/people.svg'
    },
    {
      title: 'Manage Employers',
      url: '/people/listing/employers',
      icon: './assets/sample-icons/side-menu/recruiter.svg'
    },
    {
      title: 'Manage Ongoing Jobs',
      url: '/jobs/manager',
      icon: './assets/sample-icons/side-menu/briefcase.svg'
    },
    {
      title: 'Job Requests',
      url: '/job-requests',
      icon: './assets/sample-icons/side-menu/document.svg'
    },
    {
      title: 'Job Offers',
      url: '/job-offers',
      icon: './assets/sample-icons/side-menu/wallet.svg'
    },
    {
      title: 'Chat',
      url: '/coming-soon',
      icon: './assets/sample-icons/side-menu/chat.svg'
    },
    {
      title: 'Manage Companies',
      url: '/companies/listing',
      icon: './assets/sample-icons/side-menu/business.svg'
    },
    {
      title: 'Work Reviews',
      url: '/people/reviews/all',
      icon: './assets/sample-icons/side-menu/reviews.svg'
    },
    // {
    //   title: 'Bluspec Map',
    //   url: '/maps',
    //   icon: './assets/sample-icons/side-menu/map-pin.svg'
    // },
    {
      title: 'Settings',
      url: '/settings',
      icon: './assets/sample-icons/side-menu/cog.svg'
    }
  ];

  otherPages = [
    {
      title: 'Route Resolver',
      url: '/showcase/route-resolvers-ux',
      icon: './assets/sample-icons/side-menu/forms.svg'
    },
    {
      title: 'Dev Debug Screen',
      url: '/app-debug',
      icon: './assets/sample-icons/side-menu/debug.svg'
    },
    {
      title: 'Google Map Test',
      url: '/maps',
      icon: './assets/sample-icons/side-menu/map.svg'
    },
    {
      title: '404 page',
      url: '/page-not-found',
      icon: './assets/sample-icons/side-menu/info.svg'
    },
      {
      title: 'Unauthorized Error page',
      url: '/unauthorized',
      icon: './assets/sample-icons/side-menu/warning.svg'
    }
  ];

  textDir = 'ltr';
  constructor(public menu: MenuController, 
    private authService: AuthService, 
    private userService: UserService, 
    private syncService: SyncService, 
    public router: Router, public storageService: StorageService, 
    public toastService: ToastService) {
    this.initializeApp();
    //this.setLanguage();
  }

  ngOnInit(): void {
    //FIND USER SESSION IN STORAGE
    this.storageService
    .get(AuthConstants.AUTH)
    .then(res => {
    if (res) {
      // //this.userDataDebug = JSON.stringify(this.localUser);
      // if(this.localUser === null || this.localUser === undefined){
      //   this.localUser = null;
      //   this.logout();
        
      // }
      console.log("/********** APP COMPONENT ONINIT() ***********/");
      console.log(JSON.stringify(res));
      this.localUser = res;
      this.apiKey = this.localUser.api_key;
    } else {
      this.localUser = null;
      this.authService.logout();
      this.toastService.presentToast("Invalid Session Info");
    }
    })
    //FIND USER SESSION IN STORAGE

    //Subscribe to any auth changes event
    this.authService.invokeLoginEvent.subscribe(value => {
      this.localUser = value;
      console.log("/********** APP COMPONENT INVOKE LOGIN EVENT ***********/");
      console.log(JSON.stringify(value));
      if(AuthConstants.DEV_MODE){
        this.toastService.presentToast("Auth Change Detected in Auth Service.");
      }
      });

   }

  async initializeApp() {
    try {
      this.syncService.syncAppData();
      if(AuthConstants.DEV_MODE){
   this.toastService.presentToast("Starting Sync Service in Background...");
      }
     await SplashScreen.hide();
    } catch (err) {
     console.log('This is normal in a browser', err);
    }
  }

  showMyProfile() {
    this.router.navigateByUrl("people/profile");
    this.menu.close();
  }

}

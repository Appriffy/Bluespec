import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { UserService } from '../../user/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, MenuController, LoadingController } from '@ionic/angular';
import { StorageService } from '../../services/storage.service';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-set-fav-skills',
  templateUrl: './set-fav-skills.page.html',
  styleUrls: ['./set-fav-skills.page.scss'],
})
export class SetFavSkillsPage implements OnInit {

  constructor(private masterService: MasterService, private userService: UserService,
    public router: Router,
    public navCtrl: NavController,
    public activatedRoute: ActivatedRoute,
    public menu: MenuController,
    public loadingController: LoadingController,
    private registrationService: RegistrationService,
    public storageService: StorageService) { }

  ngOnInit() {

    
  }

}

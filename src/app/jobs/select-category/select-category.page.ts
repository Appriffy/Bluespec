import { Component, OnInit } from '@angular/core';
import { JobSkillsService } from '../../app-masters/job-skills/job-skills.service';
import { ModalController, MenuController, AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';
import { AuthConstants } from '../../config/AuthConstants';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.page.html',
  styleUrls: ['./select-category.page.scss', 
  '../../bluspecstyles/details.page.scss',
  '../../bluspecstyles/details.shell.scss']
})
export class SelectCategoryPage implements OnInit {
  localUser:any;

  constructor(private authService: AuthService,
    private storageService: StorageService,
    private alertController: AlertController,
    public modalController: ModalController,
    public router: Router,
    public menu: MenuController,
    private route: ActivatedRoute) { 

    }


ionViewWillEnter() {
      this.menu.enable(true);
}
 
dismissModal() {
      this.modalController.dismiss();
}

onCategorySelected(category:number) {
    this.modalController.dismiss(category);
    
}

/*************** HERO ************ */
ngOnInit() {
  //this.menu.enable(false);
  this.menu.enable(true);

  //Right way 
  this.storageService
  .get(AuthConstants.AUTH)
  .then(res => {
  if (res) {
    this.localUser = res;
  } else {
    this.localUser = null;
    this.authService.logout();
  }
  });
}




}

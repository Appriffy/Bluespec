import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { RelocationFeeModel } from '../../dbmodels/relocation-fee';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LocalUser } from '../../dbmodels/local-user';
import { ToastService } from '../../services/toast.service';
import { MasterService } from '../../services/master.service';
import { StorageService } from '../../services/storage.service';
import { AuthConstants } from '../../config/AuthConstants';
import { UserService } from '../user.service';
import { AlertController, ModalController } from '@ionic/angular';
import { SelectCurrencyPage } from '../../utility-components/select-currency/select-currency.page';

@Component({
  selector: 'app-relocation-fees',
  templateUrl: './relocation-fees.page.html',
  styleUrls: ['./relocation-fees.page.scss'],
})
export class RelocationFeesPage implements OnInit {
  form: FormGroup;
  //List existing fees by user
  relocation_fees: RelocationFeeModel[];
  feesListed = false;
  editMode = false;
  selfView = true;
  user_name : string = "";
  enableRelocationFees = false;

  //Master data for all inputs
  all_relocation_inputs: any;
  loading = true;
  loadingMsg = "Loading Details";
  localUser:LocalUser;
  selectedUser:any;
  submittedFees :any;
  totalAmount:number =0;
  currencies = [];
  paymentModes = ["Per Year", "Per Month"];
  totalSalary : number = 0;
  currency :"";
  payMode :"";

  displayResponse = false;
  responseMsg = "";

  validations = {
    'canRelocate': [
      { type: 'required', message: 'By enabling relocation mode you confirm your willingness to relocate for a new job opportunity.' }
    ],
    'currency': [
      { type: 'required', message: 'You must select a currency to enter your fees.' }
    ],
    'notice_period': [
      { type: 'required', message: 'You must enter your notice period with your current employer in days.' },
      { type: 'min', message: 'Please enter a valid notice period or leave blank if not applicable.' },
      { type: 'max', message: 'You can not specify a notice period of more than an year.' }
    ],
    'payMode': [
      { type: 'required', message: 'You must select a payroll mode to list your fees.' }
    ],
    'confirmDelete': [
      { type: 'required', message: 'Please confirm that you want to disable your fee listing.' }
    ]
  };

  constructor(public router : Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    public authService: AuthService,
    private firebaseService: UserService,
    public storageService: StorageService,
    private alertController: AlertController,
    public masterService: MasterService,
    public toastService: ToastService,
    public modalCtrl: ModalController,
    private _FB : FormBuilder) { }

    ionViewWillEnter() {

    }

    get feeEntriesFormArray() { return <FormArray>this.form.get('fee_entries'); }

   ngOnInit() {
    this.form = this._FB.group({
      name : ['My Fees', Validators.required],
      user_id : ['', Validators.required],
      payMode : [this.paymentModes[0], Validators.required],
      currency : ['', Validators.required],
      currency_name : ['', Validators.required],
      notice_period : [0, [Validators.required, Validators.min(0), Validators.max(365)]],
      //canRelocate: [this.enableRelocationFees, [Validators.required, Validators.requiredTrue]],
      canRelocate: [this.enableRelocationFees],
      confirmDelete : [false],
      deleteFees : [false],
      fee_entries: this._FB.array([])
   });

   
    this.authService.getAuthCache().then(promisedValue=>{
      if(promisedValue){
       this.localUser = promisedValue;
       this.selectedUser = this.localUser.id;
       console.log("/***** PROFILE PAGE LOCAL USER : "+JSON.stringify(promisedValue));
      /************ CHECK ROUTE PARAM REQUESTS ***************/
      this.route.paramMap.subscribe(params => {
      if(params && params.has("user_id")){
        this.selectedUser = params.get("user_id");
      
        if(this.selectedUser !== this.localUser.id){
          this.selfView = false;
          }

      if(this.selectedUser <= 0){
      this.router.navigate(['page-not-found']);
      }
      }
      });
      /************ CHECK ROUTE PARAM REQUESTS ***************/
      this.form.controls.user_id.patchValue(this.selectedUser);
      this.form.get('user_id').updateValueAndValidity();
      }else{
        this.authService.logout();
      }
      this.loadItems();
     });
  

  this.storageService.get(AuthConstants.CURRENCIES).then(currencies =>{
    if(currencies){
    this.currencies = currencies;
    }
  });

  /***************************/
  this.form.get("fee_entries").valueChanges.subscribe(x => {
    //console.log('fee_entries value changed');
    //console.log("fee_entries=> "+JSON.stringify(x));
    if(x){
      this.submittedFees = JSON.stringify(x);
      //this.submittedFees = x;
    }
 });

 this.form.get("currency").valueChanges.subscribe(x => {
  if(x){
    this.currency = x;
  }
});

this.form.get("payMode").valueChanges.subscribe(x => {
  if(x){
    this.payMode = x;
  }
});

this.form.get("canRelocate").valueChanges.subscribe(x => {
  if(x){
    this.enableRelocationFees = true;
    //Apply all validations again
    this.form.get('payMode').setValidators(Validators.required);
    this.form.get('payMode').updateValueAndValidity();
    this.form.get('currency').setValidators(Validators.required);
    this.form.get('currency').updateValueAndValidity();
    this.form.get('notice_period').setValidators(Validators.compose([Validators.required, Validators.min(0), Validators.max(365)]));
    this.form.get('notice_period').updateValueAndValidity();
  }else{
    this.enableRelocationFees = false;
    this.form.get('payMode').clearValidators();
    this.form.get('payMode').updateValueAndValidity();
    this.form.get('currency').clearValidators();
    this.form.get('currency').updateValueAndValidity();
    this.form.get('notice_period').clearValidators();
    this.form.get('notice_period').updateValueAndValidity();
    this.form.get('confirmDelete').setValidators(Validators.compose([Validators.required, Validators.requiredTrue]));
    this.form.get('confirmDelete').updateValueAndValidity();
  }
  console.log("Mode Switched : "+ this.enableRelocationFees);
});

 /***************************/
  }

  initFeeFields(id:number, name:string, fee:number) : FormGroup
{
   return this._FB.group({
    relocation_input : [id, Validators.required],
    relocation_name: [name, Validators.required],
    fee : [fee, [Validators.required, Validators.min(0), Validators.max(1000000)]]
   });
}

addNewInputField(id:number, name:string, fee:any) : void
{
   const control = <FormArray>this.form.controls.fee_entries;
   control.push(this.initFeeFields(id, name, fee));
}

removeInputField(i : number) : void
{
   const control = <FormArray>this.form.controls.fee_entries;
   control.removeAt(i);
}

switchEditMode(){
  this.editMode = true;
}

  switchDisplayMode(){
    this.editMode = false;
}

  saveFormChanges(){
      //alert(JSON.stringify(this.form.value));
      //alert(JSON.stringify(this.form.value.fee_entries));
      this.hitRelocationSaveAPI();
}

  loadItems(){
  this.loadingMsg = "Loading Relocation Preferences";
  this.loading = true;
  this.authService.getAuthKey().then(apiKey=>{
  this.firebaseService.getRelocationFeesDataSource(apiKey, this.selectedUser).subscribe(allFees=>{
    this.loading = false;
    //console.log("/******** GOT ALL FEES *********/"+JSON.stringify(allFees));
    if(allFees){
      this.user_name = allFees.username;
      if(allFees.totalSalary){
        this.totalSalary = allFees.totalSalary;
      }
      if(allFees.allFormFields){
        this.all_relocation_inputs = allFees.allFormFields;
        if(this.all_relocation_inputs !== null){
          //Clear Array First
          const control = <FormArray>this.form.controls['fee_entries'];
          for(let i=control.length - 1; i>=0; i--){
           control.removeAt(i);
          }
    
          this.all_relocation_inputs.map((item) => {
            if(item){
              (this.form.controls.fee_entries as FormArray).push(this.initFeeFields(item.id, item.title, item.fee));
            }
          });
        }
      }
      console.log("/******** RELOCATION FEES *********/"+JSON.stringify(this.all_relocation_inputs));

        if(allFees.fees){
        this.feesListed = allFees.isPrefsAdded;
        //Used only for listing
        this.relocation_fees = allFees.fees;
        let relocationDetails = allFees.relocationDetails;
        if(relocationDetails && relocationDetails !== null && relocationDetails !== undefined){
         //Add Existing Relocation Preferences
         if(relocationDetails.payMode){
          this.form.controls.payMode.patchValue(relocationDetails.payMode);
          this.payMode = relocationDetails.payMode;
          this.form.get('payMode').updateValueAndValidity();
         }
         if(relocationDetails.canRelocate){
          this.form.controls.canRelocate.patchValue(true);
          this.enableRelocationFees = true;
          this.form.get('canRelocate').updateValueAndValidity();
         }
         if(relocationDetails.currency){
          this.form.controls.currency.patchValue(relocationDetails.currency);
          this.form.controls.currency_name.patchValue(relocationDetails.currency);
          this.currency = relocationDetails.currency;
          this.form.get('currency').updateValueAndValidity();
          this.form.get('currency_name').updateValueAndValidity();
         }
         if(relocationDetails.notice_period){
          this.form.controls.notice_period.patchValue(relocationDetails.notice_period);
          this.form.get('notice_period').updateValueAndValidity();
         }

        }
      }else{
        console.log("NO PREFERENCES ADDED => "+JSON.stringify(allFees));
      }
    }
  });
});
}

    async hitRelocationSaveAPI(){
      this.loadingMsg = "Saving Relocation Fees";
      this.loading = true;
      this.authService.getAuthKey().then(apiKey=>{
        let postData = {
          user_id : this.form.value.user_id,
          //relocation_fees : this.form.value.fee_entries,
          relocation_fees : this.submittedFees,
          payMode : this.form.value.payMode,
          notice_period : this.form.value.notice_period,
          canRelocate : this.form.value.canRelocate,
          currency : this.form.value.currency,
          confirmDelete: this.form.value.confirmDelete,
          deleteFees: this.form.value.deleteFees,
        }
        console.log("Gonna Hitting => "+JSON.stringify(postData)+" via Token "+apiKey);
        this.firebaseService.callRelocationFeesSaveAPI(apiKey, postData)
        .subscribe(
          (res: any) => {
            this.loading = false;
            console.log('########## Fees Update API Response ########### '+JSON.stringify(res));
            if (!res.error) {
              /********** NAVIGATE WITH USER ID **********/
              this.editMode = false;
              this.displayResponse = true;
              this.responseMsg = res.message;

              setTimeout(() => {
                this.displayResponse = false;
              }, 8000);

              this.loadItems();
              //this.router.navigate(['/relocation-fees;user_id='+this.selectedUser]);
              } else {
                this.presentAlert(res.message);
              }
          },
          (error: any) => {
           //this.loadingController.dismiss();
           this.loading  = false;
          this.presentAlert('Looks like there is a Network Issue while saving relocation fees.');
          });
      });
    }


    private async presentAlert(message: string): Promise<HTMLIonAlertElement> {
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: '',
        message: message,
        buttons: ['OK']
      });
      await alert.present();
      return alert;
    }


    async openCurrencyChooser() {
      const modal = await this.modalCtrl.create({
        component: SelectCurrencyPage
      });
  
      modal.onDidDismiss().then(item => {
        if (item.data != null) {
          //alert(JSON.stringify(item));
          //this.selectedJobArea = item.data;
          this.form.controls.currency.patchValue(item.data.symbol);
          this.form.controls.currency_name.patchValue(item.data.symbol);
        }
      });
      await modal.present();
     }

}

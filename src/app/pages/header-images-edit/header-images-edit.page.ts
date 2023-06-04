import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestServiceService } from '../../services/request-service.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-header-images-edit',
  templateUrl: './header-images-edit.page.html',
  styleUrls: ['./header-images-edit.page.scss'],
})
export class HeaderImagesEditPage implements OnInit {
  itemId: string;
  message: any;
  listOfHeaders: any;
  file: File;
  formData = {
    title: '',
    rate: '',
    time: '',
    description: '',
    headerImage: '',
    id:''
  };
  constructor(private route: ActivatedRoute,
    public loadingController: LoadingController
    , private requestServiceService: RequestServiceService,
    public alertController: AlertController,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.itemId = params['id'];
    });
    //alert(this.itemId);
    this.getHeaderImageDetails(this.itemId);
  }

  async getHeaderImageDetails(id) {
    const formData = new FormData();
    formData.append('id', id);
    this.presentLoading(); // show loader
    this.requestServiceService.postHttpCall("getHeader", formData).subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        console.log(data);
        //this.listOfHeaders = data.data;
        this.formData.title = data.data.title;
        this.formData.rate = data.data.rate;
        this.formData.time = data.data.time;
        this.formData.description = data.data.description;
        this.formData.id=data.data.id;
      } else {
        console.log(data);
        this.message = data.message;
      }
      this.loadingController.dismiss();

    });

  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading Header Data...',
      spinner: 'crescent'
    });
    await loading.present();
  }


  onFileSelected(event) {
    this.file = event.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('headerImage', this.file);
    formData.append('title', this.formData.title);
    formData.append('rate', this.formData.rate);
    formData.append('time', this.formData.time);
    formData.append('description', this.formData.description);
    formData.append('id', this.formData.id);
    this.requestServiceService.postHttpCall("updateHeaderImage", formData).subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        console.log(data);
        this.presentAlert(data.status, data.message);
        this.goToOtherPage('tabs/tab1');
      } else {
        console.log(data);
        this.presentAlert(data.status, data.message);
        this.goToOtherPage('header-images-list');
      }
    });


  }

  formValid() {
    return this.formData.title && this.formData.rate && this.formData.time && this.formData.description && this.file;
  }
  async presentAlert(status, message) {
    const alert = await this.alertController.create({
      header: status,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  goToOtherPage(url) {
    this.navCtrl.navigateForward(url);
  }
}

import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RequestServiceService } from '../../services/request-service.service';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-header',
  templateUrl: './add-header.page.html',
  styleUrls: ['./add-header.page.scss'],
})
export class AddHeaderPage implements OnInit {

  file: File;
  formData = {
    title: '',
    rate: '',
    time: '',
    description: '',
    headerImage: ''
  };


  constructor(private requestServiceService: RequestServiceService,
    public alertController: AlertController,
    private navCtrl: NavController) { }


  ngOnInit() {

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

    this.requestServiceService.postHttpCall("submitHeaderImage", formData).subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        console.log(data);
        this.presentAlert(data.status, data.message);
        this.goToOtherPage('tabs/tab1');
      } else {
        console.log(data);
        this.presentAlert(data.status, data.message);
        this.goToOtherPage('add-header');
      }
    });


  }
  async presentAlert(status, message) {
    const alert = await this.alertController.create({
      header: status,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
  formValid() {
    return this.formData.title && this.formData.rate && this.formData.time && this.formData.description && this.file;
  }

  goToOtherPage(url) {
    this.navCtrl.navigateForward(url);
  }
}

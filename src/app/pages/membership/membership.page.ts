import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { RequestServiceService } from '../../services/request-service.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.page.html',
  styleUrls: ['./membership.page.scss'],
})
export class MembershipPage implements OnInit {
  message: any;
  listOfMembership: any;
  constructor(private navCtrl: NavController,public loadingController: LoadingController,
    private requestServiceService: RequestServiceService) { }

  ngOnInit() {
    this.getListOfHeader();
  }

  cardClicked(arg) {
    // Perform your desired action here
    // For example, navigate to another page
    console.log("arg = "+arg);
    const navigationExtras: NavigationExtras = {
      queryParams: {
        argument: arg
      }
    };
    this.navCtrl.navigateForward('/membership-details',navigationExtras);
  }

  async getListOfHeader() {
    this.presentLoading(); // show loader
    this.requestServiceService.getHttpCall("fetchAllMembershipData").subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        console.log(data);
        this.listOfMembership = data.data;
      } else {
        console.log(data);
        this.message = data.message;
      }
      this.loadingController.dismiss();

    });

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading Membrship Data',
      spinner: 'crescent'
    });
    await loading.present();
  }
}

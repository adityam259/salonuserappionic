import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from '../../services/request-service.service';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.page.html',
  styleUrls: ['./list-employee.page.scss'],
})
export class ListEmployeePage implements OnInit {
  message: any;
  listOfHeaders: any;
  constructor(private requestServiceService: RequestServiceService,
    public loadingController: LoadingController,
    private router: Router,) { }

  ngOnInit() {
    this.getListOfUserEmployee();
  }

   getListOfUserEmployee() {
    this.requestServiceService.getHttpCall("getLoginUserEmployee").subscribe((data: any) => {
      if (data.status === 'SUCCESS') {
        console.log(data);
        this.listOfHeaders = data.data;
      } else {
        console.log(data);
        this.message = data.message;
      }
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading List Of Employee / Users...',
      spinner: 'crescent'
    });
    await loading.present();
  }

  rowClicked(itemId: string) {
   //alert(itemId);
   const navigationExtras: NavigationExtras = {
    queryParams: {
      id: itemId
    }
  };
   this.router.navigate(['edit-employee'],navigationExtras); 
  }

}

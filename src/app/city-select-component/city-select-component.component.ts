import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-select-component',
  templateUrl: './city-select-component.component.html',
  styleUrls: ['./city-select-component.component.scss'],
})
export class CitySelectComponentComponent  {
  @Input() cities: any[];
  defaultAddress:any;

  constructor(private modalController: ModalController,
    public storageService: StorageService,
    private router: Router) {
    this.storageService.get("defaultAddress").then(result => {
      if (result != null) {
        this.defaultAddress = result;
      }
    });
    }
 
  dismiss() {
    this.modalController.dismiss();
  }

  selectCity(city) {
    this.modalController.dismiss(city);
    
  }

  addAddress(){
    //this.router.navigate(['add-location-address']);
    this.modalController.dismiss('addLocation');
  }
}

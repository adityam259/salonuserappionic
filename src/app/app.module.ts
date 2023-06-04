/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { CommonModule } from '@angular/common';
import { CitySelectComponentComponent } from '../app/city-select-component/city-select-component.component';
import { AddLocationAddressPageRoutingModule } from './pages/add-location-address/add-location-address-routing.module';
import { AddLocationAddressPage } from './pages/add-location-address/add-location-address.page';


@NgModule({
  declarations: [AppComponent,CitySelectComponentComponent,AddLocationAddressPage],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),CommonModule,
    ReactiveFormsModule, AddLocationAddressPageRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    InAppBrowser,Geolocation,NativeGeocoder],
  bootstrap: [AppComponent],
})
export class AppModule {}

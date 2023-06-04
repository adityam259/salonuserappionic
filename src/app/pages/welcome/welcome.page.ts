/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../storage.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  countInc = 0;
  constructor(private router: Router, public storageService: StorageService) { }

  async  ngOnInit() {
    var  hasLoggedIn =  await  this.storageService.get("hasLoggedIn");
    console.log("hasLoggedIn =="+hasLoggedIn);
    if(hasLoggedIn){
      this.router.navigate(['tabs/tab1']);
    }else{
      this.router.navigate(['login-phone']);
    }
  }

  goToLogin() {
    this.router.navigate(['login-phone']);
  }

  



}

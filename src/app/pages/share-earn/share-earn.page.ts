import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-share-earn',
  templateUrl: './share-earn.page.html',
  styleUrls: ['./share-earn.page.scss'],
})
export class ShareEarnPage implements OnInit {

  constructor(private inAppBrowser: InAppBrowser) { }

  ngOnInit() {
  }

  share() {
    const referralCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    const referralLink = `https://heykudy/signup?referralCode=${referralCode}`;
    const message = `Sign up using my referral link: ${referralLink}`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    this.inAppBrowser.create(url, '_system');
  }
  

}

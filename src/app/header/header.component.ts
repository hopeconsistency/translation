import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  switchlang: string = 'en';
  browserLang;
  constructor(
    public service: MyserviceService,
    public translate: TranslateService
  ) {
    this.service.selectedlang.subscribe((res) => {
      this.switchlang = res;
      console.log(res);
    });
    console.log('mrinal');
    translate.addLangs(['de', 'en']);
    translate.setDefaultLang('de');
    translate.use('en');
    this.browserLang = translate.getDefaultLang();
    console.log('browser lang is ' + this.browserLang);
    this.languagechanged();
    this.service.selectedlang.next(this.browserLang);
  }

  ngOnInit(): void {}

  languagechanged() {
    this.translate.use(
      this.browserLang.match(/de|en/) ? this.browserLang : 'en'
    );
  }

  selectedlang(len) {
    this.service.selectedlang.next(len);
    // console.log(len);
  }
}

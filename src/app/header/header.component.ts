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
    translate.addLangs(['de', 'en']);
    translate.setDefaultLang('de');
    translate.use(this.switchlang);
    this.browserLang = translate.getDefaultLang();
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
    this.translate.use(this.switchlang);
    // console.log(len);
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LangTransModule } from './lang-trans/lang-trans.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    LangTransModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

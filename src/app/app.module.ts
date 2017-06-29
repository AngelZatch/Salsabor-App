import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SalsaborNavComponent } from './components/salsabor-nav/salsabor-nav.component';
import { SalsaborSideMenuComponent } from './components/salsabor-side-menu/salsabor-side-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SalsaborNavComponent,
    SalsaborSideMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

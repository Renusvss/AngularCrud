import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MobileServiceService } from './mobile-service.service';
import { MobilesComponent } from './mobiles/mobiles.component';

@NgModule({
  declarations: [AppComponent, MobilesComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [MobileServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}

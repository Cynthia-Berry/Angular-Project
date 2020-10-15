import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { PlaygroundComponent } from './playground/playground.component';
import { CountryComponent } from './country/country.component'
import { HttpService } from './services/http.service';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    HomeComponent,
    PlaygroundComponent,
    CountryComponent,
    CurrencyConverterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    NgxIntlTelInputModule
  ],
  providers: [
    HttpService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

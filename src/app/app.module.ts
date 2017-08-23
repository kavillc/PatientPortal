import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http';

import{PatientMainComponent} from './PatientMain/PatientMain.component';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MedicationDetailComponent } from './MedicationDetail/MedicationDetail.component';
import { MedicationDetailService } from './/MedicationDetail/MedicationDetail.service';
@NgModule({
  declarations: [
    AppComponent,
    PatientMainComponent,
    HeaderComponent,
    MedicationDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MedicationDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }

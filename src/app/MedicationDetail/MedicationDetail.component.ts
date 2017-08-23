import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Http, Response } from '@angular/http';
import { MedicationDetailService } from './MedicationDetail.service';
import {KeyValueModel} from '../KeyValueModel.model'
import {Observable} from 'rxjs'
import {MedicationDetail} from './MedicationDetail.model'
@Component({
  selector: 'app-medication-detail',
  templateUrl: './MedicationDetail.component.html',
  providers: [MedicationDetailService],
  styleUrls: ['./MedicationDetail.component.css']
})
export class MedicationDetailComponent implements OnInit {
  medications: MedicationDetail[];
  subscription: Subscription;
  patientId:number=1742817;
  temp:Date=new Date();
  keyValue: KeyValueModel[]=[];
  //this.keyValue[]=[new KeyValueModel("patientId","1742817")];
  // , new KeyValueModel("Date","6")];
  private dateRange=6;
  constructor(private medicationService: MedicationDetailService){} ;
   ngOnInit(){
     console.log(this.patientId.toString());
     console.log(this.dateRange.toString());
    this.keyValue=[new KeyValueModel("patientId",this.patientId.toString()),
                   new KeyValueModel("dateRange",this.dateRange.toString())
                  ];
    // this.medicationService.getMedicationWithObservable().subscribe(medications => {
    //     this.medications = medications
      this.medicationService.getServiceWithComplexObjectAsQueryString(this.keyValue).subscribe(medications => {
       this.medications = medications
       });
}
}

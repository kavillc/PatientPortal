import {Http,Response,Headers, RequestOptions, URLSearchParams } from '@angular/http'
import {Observable} from 'rxjs'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
import {MedicationDetail} from './MedicationDetail.model'
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
@Injectable()
export class MedicationDetailService{
  medicationDetail:MedicationDetail[];
  headers:Headers;
  options:RequestOptions;
  url="http://localhost/aspnet_client/PatientPortal/api/PatientMedication/GetPatientMedication";
  constructor (private http:Http){
    this.headers = new Headers({ 'Content-Type': 'application/json', 
    'Accept': 'q=0.8;application/json;q=0.9' });
    this.options = new RequestOptions({ headers: this.headers });
  }
  getServiceWithComplexObjectAsQueryString(param: any): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    console.log(param)
    for (var KeyString of param) {
        console.log(KeyString);
        params.set(KeyString["KeyString"], KeyString["ValueString"]);
        if (param.hasOwnProperty(KeyString)) {
          console.log("key2");
            let val = param[KeyString];
            params.set(KeyString["KeyString"], KeyString["ValueString"]);
        }    
        console.log(this.params);   
    }
    this.options = new RequestOptions({ headers: this.headers, search: params });
    console.log(this.options);
    return this.http
        .get(this.url, this.options)
        .map(this.extractData)
        .catch(this.handleError);
  }   
  
  private extractData(res: Response) {
      let body = res.json();
      return body || {};
  }
  
  private handleError(error: any) {
      let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg);
      return Observable.throw(errMsg);
  }
  
  private params= new URLSearchParams();
 // this.params.set('',patientId);

  public getMedicationWithObservable()
  {
    // return this.http.get('http://localhost/aspnet_client/PatientPortal/api/PatientMedication/1')
    // .map(response => response.json());
  }
}

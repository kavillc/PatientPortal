

export class MedicationDetail {
public RxNumber:number;
public PharmacyPatientId:number;
public MedicationName:string;
public PatientName:string;
public PrescriberName:string;
public PharmacyName:string;
public DateShipped:string;
public Refills:number;
public ScheduledRefill:string;
public DosingFrequency:string;
public PrescriberPhone:string;
public PharmacyAddress:string;
public PatientCopay:number;
public Quantity:number;
public DaysSupply:number;
public DateFilled:string;
public DateExpiration:string;
public NDC:number;

constructor (rxNumber:number,pharmacyPatientId:number,medicationName:string,patientName:string,prescriberName:string,pharmacyName:string,
dateShipped:string,refills:number,scheduledRefill:string,dosingFrequency:string,prescriberPhone:string,pharmacyAddress:string,patientCopay:number,
quantity:number,daysSupply:number,dateFilled:string,dateExpiration:string,NDC:number)
{
this.RxNumber=rxNumber;
this.PharmacyPatientId=pharmacyPatientId;
this.MedicationName=medicationName;
this.PatientName=patientName;
this.PrescriberName=prescriberName;
this.PharmacyName=pharmacyName;
this.DateShipped=dateShipped;
this.Refills=refills;
this.ScheduledRefill=scheduledRefill;
this.DosingFrequency=dosingFrequency;
this.PrescriberPhone=prescriberPhone;
this.PharmacyAddress=pharmacyAddress;
this.PatientCopay=patientCopay;
this.Quantity=quantity;
this.DaysSupply=daysSupply;
this.DateFilled=dateFilled;
this.DateExpiration=dateExpiration;
this.NDC=NDC;

}
}

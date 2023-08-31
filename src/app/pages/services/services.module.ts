import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { CallCentreComponent } from './call-centre/call-centre.component';
import { DigitalBankingComponent } from './digital-banking/digital-banking.component';
import { UenrMobileComponent } from './uenr-mobile/uenr-mobile.component';



@NgModule({
  declarations: [
    ServicesComponent,
    CallCentreComponent,
    DigitalBankingComponent,
    UenrMobileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ServicesModule { }

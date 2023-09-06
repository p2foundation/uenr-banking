import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServicesComponent} from './services.component';
import {CallCentreComponent} from './call-centre/call-centre.component';
import {DigitalBankingComponent} from './digital-banking/digital-banking.component';
import {UenrMobileComponent} from './uenr-mobile/uenr-mobile.component';
import {RouterModule, Routes} from "@angular/router";

export const routes: Routes = [
  {path: '', component: ServicesComponent, pathMatch: 'full'},
  {path: 'digital-banking', component: DigitalBankingComponent},
  {path: 'call-centre', component: CallCentreComponent},
  {path: 'uenr-mobile', component: UenrMobileComponent}
]

@NgModule({
  declarations: [
    ServicesComponent,
    CallCentreComponent,
    DigitalBankingComponent,
    UenrMobileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ServicesModule {
}

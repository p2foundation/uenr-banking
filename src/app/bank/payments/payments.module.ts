import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaymentsHistoryComponent} from './payments-history/payments-history.component';
import {MobileMoneyComponent} from './mobile-money/mobile-money.component';
import {BillPaymentsComponent} from './bill-payments/bill-payments.component';
import {RouterModule, Routes} from "@angular/router";
import {CreditCardsComponent} from "../../pages/products/credit-cards/credit-cards.component";
import {LoanPaymentsComponent} from "./loan-payments/loan-payments.component";
import {InvestmentsPaymentsComponent} from "./investments-payments/investments-payments.component";
import {SchoolFeesComponent} from "./school-fees/school-fees.component";
import {AuthGuard} from "../../repository/Auth/auth.guard";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

export const routes: Routes = [
  {path: 'bill-payments', component: BillPaymentsComponent},
  {path: 'cc-payments', component: CreditCardsComponent},
  {path: 'mobile-money', component: MobileMoneyComponent},
  {path: 'trans-history', component: PaymentsHistoryComponent},
  {path: 'loan-payments', component: LoanPaymentsComponent},
  {path: 'invests-payments', component: InvestmentsPaymentsComponent},
  {path: 'school-fees', component: SchoolFeesComponent, canActivate:[AuthGuard]}
];

@NgModule({
  declarations: [
    BillPaymentsComponent,
    MobileMoneyComponent,
    PaymentsHistoryComponent,
    LoanPaymentsComponent,
    InvestmentsPaymentsComponent,
    SchoolFeesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PaymentsModule {
}

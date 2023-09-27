import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaymentsHistoryComponent} from './payments-history/payments-history.component';
import {MobileMoneyComponent} from './mobile-money/mobile-money.component';
import {BillPaymentsComponent} from './bill-payments/bill-payments.component';
import {CreditCardPaymentsComponent} from './credit-card-payments/credit-card-payments.component';
import {RouterModule, Routes} from "@angular/router";
import {CreditCardsComponent} from "../../pages/products/credit-cards/credit-cards.component";
import {LoanPaymentsComponent} from "./loan-payments/loan-payments.component";
import {InvestmentsPaymentsComponent} from "./investments-payments/investments-payments.component";
import {SchoolFeesComponent} from "./school-fees/school-fees.component";
import {AuthGuard} from "../../repository/Auth/auth.guard";

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
    PaymentsHistoryComponent,
    MobileMoneyComponent,
    BillPaymentsComponent,
    CreditCardPaymentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PaymentsModule {
}

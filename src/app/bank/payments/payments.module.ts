import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsHistoryComponent } from './payments-history/payments-history.component';
import { MobileMoneyComponent } from './mobile-money/mobile-money.component';
import { BillPaymentsComponent } from './bill-payments/bill-payments.component';
import { CreditCardPaymentsComponent } from './credit-card-payments/credit-card-payments.component';



@NgModule({
  declarations: [
    PaymentsHistoryComponent,
    MobileMoneyComponent,
    BillPaymentsComponent,
    CreditCardPaymentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaymentsModule { }

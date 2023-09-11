import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { LoanPaymentsComponent } from './payments/loan-payments/loan-payments.component';
import { InvestmentsPaymentsComponent } from './payments/investments-payments/investments-payments.component';

export const routes: Routes = [
  {path: 'accounts', loadChildren: ()=> import('./accounts/accounts.module').then(m => m.AccountsModule) },
  {path: 'investments', loadChildren: ()=> import('./investments/investments.module').then(m => m.InvestmentsModule) },
  {path: 'loans', loadChildren: ()=> import('./loans/loans.module').then(m => m.LoansModule) },
  {path: 'payments', loadChildren: ()=> import('./payments/payments.module').then(m => m.PaymentsModule) },
  {path: 'transfers', loadChildren: ()=> import('./transfers/transfers.module').then(m => m.TransfersModule) },
]

@NgModule({
  declarations: [
    LoanPaymentsComponent,
    InvestmentsPaymentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BankModule { }

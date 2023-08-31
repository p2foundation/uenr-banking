import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CurrentAccountsComponent } from './current-accounts/current-accounts.component';
import { FixedDepositsComponent } from './fixed-deposits/fixed-deposits.component';
import { SavingsAccountsComponent } from './savings-accounts/savings-accounts.component';
import { DebitCardsComponent } from './debit-cards/debit-cards.component';
import { CreditCardsComponent } from './credit-cards/credit-cards.component';
import { InvestmentsComponent } from './investments/investments.component';
import { LoansComponent } from './loans/loans.component';



@NgModule({
  declarations: [
    ProductsComponent,
    CurrentAccountsComponent,
    FixedDepositsComponent,
    SavingsAccountsComponent,
    DebitCardsComponent,
    CreditCardsComponent,
    InvestmentsComponent,
    LoansComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }

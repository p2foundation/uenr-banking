import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './products.component';
import {CurrentAccountsComponent} from './current-accounts/current-accounts.component';
import {FixedDepositsComponent} from './fixed-deposits/fixed-deposits.component';
import {SavingsAccountsComponent} from './savings-accounts/savings-accounts.component';
import {DebitCardsComponent} from './debit-cards/debit-cards.component';
import {CreditCardsComponent} from './credit-cards/credit-cards.component';
import {InvestmentsComponent} from './investments/investments.component';
import {LoansComponent} from './loans/loans.component';
import {RouterModule, Routes} from "@angular/router";

export const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'current-account', component: CurrentAccountsComponent},
  {path: 'savings-account', component: SavingsAccountsComponent},
  {path: 'fixed-deposits', component: FixedDepositsComponent},
  {path: 'credit-cards', component: CreditCardsComponent},
  {path: 'debit-cards', component: DebitCardsComponent},
  {path: 'investments', component: InvestmentsComponent},
  {path: 'loans', component: LoansComponent}
]

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
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule {
}

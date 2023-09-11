import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LocalTransfersComponent} from './local-transfers/local-transfers.component';
import {ManageBeneficiariesComponent} from './manage-beneficiaries/manage-beneficiaries.component';
import {BetweenOwnAccountsComponent} from './between-own-accounts/between-own-accounts.component';
import {TransferHistoryComponent} from './transfer-history/transfer-history.component';
import {RouterModule, Routes} from "@angular/router";

export const routes: Routes = [
  {path: 'between-own-accounts', component: BetweenOwnAccountsComponent},
  {path: 'local-transfers', component: LocalTransfersComponent},
  {path: 'manage-beneficiaries', component: ManageBeneficiariesComponent},
  {path: 'trans-history', component: TransferHistoryComponent}
];

@NgModule({
  declarations: [
    LocalTransfersComponent,
    ManageBeneficiariesComponent,
    BetweenOwnAccountsComponent,
    TransferHistoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TransfersModule {
}

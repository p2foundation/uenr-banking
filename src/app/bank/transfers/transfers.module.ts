import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalTransfersComponent } from './local-transfers/local-transfers.component';
import { ManageBeneficiariesComponent } from './manage-beneficiaries/manage-beneficiaries.component';
import { BetweenOwnAccountsComponent } from './between-own-accounts/between-own-accounts.component';
import { TransferHistoryComponent } from './transfer-history/transfer-history.component';



@NgModule({
  declarations: [
    LocalTransfersComponent,
    ManageBeneficiariesComponent,
    BetweenOwnAccountsComponent,
    TransferHistoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransfersModule { }

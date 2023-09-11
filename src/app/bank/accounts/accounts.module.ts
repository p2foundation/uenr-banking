import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { AccountHistoryComponent } from './account-history/account-history.component';
import {RouterModule, Routes} from "@angular/router";

export const routes: Routes = [
  {path: '', component: AccountsComponent, pathMatch: 'full'},
  {path: 'account-info', component: AccountInfoComponent},
  {path: 'accounts-history', component: AccountHistoryComponent},
  {path: 'open-account', loadChildren: ()=> import('./open-accounts/open-accounts.module').then(m=>m.OpenAccountsModule)}
]


@NgModule({
  declarations: [
    AccountsComponent,
    AccountInfoComponent,
    AccountHistoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AccountsModule { }

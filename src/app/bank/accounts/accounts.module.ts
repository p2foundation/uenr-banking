import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { AccountHistoryComponent } from './account-history/account-history.component';
import { OpenAccountsComponent } from './open-accounts/open-accounts.component';
import { LoginComponent } from './open-accounts/login/login.component';
import {RouterModule, Routes} from "@angular/router";

export const routes: Routes = [
  {path: '', component: AccountsComponent, pathMatch: 'full'},
  {path: 'account-info', component: AccountInfoComponent},
  {path: 'account-history', component: AccountInfoComponent},
  {path: 'open-accounts', component: OpenAccountsComponent}
]


@NgModule({
  declarations: [
    AccountsComponent,
    AccountInfoComponent,
    AccountHistoryComponent,
    OpenAccountsComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AccountsModule { }

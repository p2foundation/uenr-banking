import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {OpenAccountsComponent} from "./open-accounts.component";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  {path: '', component: OpenAccountsComponent, pathMatch: 'full'},
  {path: 'login-accounts', component: LoginComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OpenAccountsModule { }

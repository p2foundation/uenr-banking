import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {OpenAccountsComponent} from "./open-accounts.component";
import {LoginComponent} from "./login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { RegisterComponent } from './register/register.component';
import {AuthService} from "../../../repository/Auth/auth.service";

export const routes: Routes = [
  {path: '', component: OpenAccountsComponent, pathMatch: 'full'},
  {path: 'login-accounts', component: LoginComponent},
  {path: 'register-accounts', component: RegisterComponent}
];

@NgModule({
  declarations: [
    OpenAccountsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService]
})
export class OpenAccountsModule {
}

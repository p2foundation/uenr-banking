import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {SharedModule} from "./shared/shared.module";
import {AboutAreaComponent} from "./pages/about-area/about-area.component";
import {FreeTrialAreaComponent} from './pages/free-trial-area/free-trial-area.component';
import {PartnerAreaComponent} from './pages/partner-area/partner-area.component';
import {PricingPlanComponent} from './pages/pricing-plan/pricing-plan.component';
import {ContactComponent} from "./pages/contact/contact.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthGuard} from "./repository/Auth/auth.guard";
import {AuthService} from "./repository/Auth/auth.service";
import {PaymentService} from "./repository/Payments/payment.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutAreaComponent,
    FreeTrialAreaComponent,
    PartnerAreaComponent,
    PricingPlanComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [PaymentService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {SharedModule} from "./shared/shared.module";
import {AboutAreaComponent} from "./pages/about-area/about-area.component";
import { FreeTrialAreaComponent } from './pages/free-trial-area/free-trial-area.component';
import { PartnerAreaComponent } from './pages/partner-area/partner-area.component';
import { PricingPlanComponent } from './pages/pricing-plan/pricing-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutAreaComponent,
    FreeTrialAreaComponent,
    PartnerAreaComponent,
    PricingPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

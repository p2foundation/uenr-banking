import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'contact-us', component: ContactComponent},
  {path: 'help', loadChildren: () => import('./pages/help/help.module').then(m => m.HelpModule)},
  {path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule)},
  {path: 'services', loadChildren: () => import('./pages/services/services.module').then(m => m.ServicesModule)},
  {path: 'services', loadChildren: () => import('./pages/services/services.module').then(m => m.ServicesModule)},
  {path: 'banking', loadChildren: () => import('./bank/bank.module').then(m => m.BankModule)},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      initialNavigation: 'enabledBlocking'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'cargo-details', loadChildren: './cargo-details/cargo-details.module#CargoDetailsPageModule' },
  { path: 'cargo-description', loadChildren: './cargo-description/cargo-description.module#CargoDescriptionPageModule' },
  { path: 'shipping-information', loadChildren: './shipping-information/shipping-information.module#ShippingInformationPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

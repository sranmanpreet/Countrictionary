import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { HomeComponent } from './home/home.component';
import { CountryResolver } from './country/country.resolver';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "full"},
  { path: 'home', component: HomeComponent },
  { path: 'country/:name', component: CountryComponent, resolve: {country: CountryResolver} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

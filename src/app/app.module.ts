import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CountryComponent } from './country/country.component';
import { HomeComponent } from './home/home.component';
import { CountryResolver } from './country/country.resolver';
import { SearchPipe } from './search/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CardComponent,
    SearchComponent,
    FilterComponent,
    CountryComponent,
    HomeComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [CountryResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }

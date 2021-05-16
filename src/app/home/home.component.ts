import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'countrictionary';
  region = 'Africa';
  countries: any;
  searchText: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  getCountries(countries: any) {
    this.countries = countries;
  }

  search(searchText: any) {
    this.searchText = searchText;
  }

}

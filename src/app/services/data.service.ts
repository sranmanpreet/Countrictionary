import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private serverUrl: String = "https://restcountries.eu/rest/v2";

  constructor(private http: HttpClient) { }

  getAllCountries() {
    return this.http.get(this.serverUrl + "/all");
  }

  getCountriesByRegion(region: String) {
    return this.http.get(this.serverUrl + "/region/" + region);
  }

  getCountryByName(name: String) {
    return this.http.get(this.serverUrl + "/name/" + name + "?fullText=true");
  }

  getCountryByAlpha3Codes(codes: String) {
    return this.http.get(this.serverUrl + "/alpha?codes=" + codes);
  }

  getTheme():any{
    let theme = localStorage.getItem("currentTheme");
    if(theme==null){
      this.setTheme();
      return this.getTheme();
    }
    return theme;
  }

  setTheme(){
    localStorage.setItem("currentTheme", this.getTheme()=="dark-theme"? "light-theme": "dark-theme"); 
  }
}

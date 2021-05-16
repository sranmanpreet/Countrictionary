import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  selectedRegion: any;
  @Output() countriesEvent = new EventEmitter<any>();

  constructor(private dataService: DataService) { 
    this.selectedRegion ="";
    this.dataService.getAllCountries().subscribe(countries=> this.countriesEvent.emit(countries));
  }

  ngOnInit(): void {
  }

  getCountries() {
    this.dataService.getCountriesByRegion(this.selectedRegion).subscribe(countries=> this.countriesEvent.emit(countries));
  }

}

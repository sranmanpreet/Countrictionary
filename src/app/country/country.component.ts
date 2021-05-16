import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit, OnDestroy {

  country: any;
  borderCodes: string = "";
  border: string = "";

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.route.data.subscribe((data: any) => {
      this.country = data.country[0];
      for (let i = 0; i < this.country.borders.length; i++) {
        this.borderCodes = this.borderCodes + this.country.borders[i] + ";";
      }

      this.dataService.getCountryByAlpha3Codes(this.borderCodes).subscribe((data: any) => {
        for (let i = 0; i < data.length; i++) {
          this.border = this.border + data[i].name;
          if (i != data.length - 1) {
            this.border = this.border + ", ";
          }
        }
      },() => {
        this.border = "None";
      });

    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
  }

}

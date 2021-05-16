import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  currentTheme:any;
  constructor(private dataService: DataService) {
    this.currentTheme = this.dataService.getTheme();
   }

  ngOnInit(): void {
  }

  setTheme(){
    this.dataService.setTheme();
  }
}

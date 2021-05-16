import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchTextEvent = new EventEmitter();
  searchText: string ="";

  constructor(library: FaIconLibrary) { 
    library.addIcons(faSearch);
  }

  ngOnInit(): void {
  }

  search(){
    this.searchTextEvent.emit(this.searchText);
  }

}

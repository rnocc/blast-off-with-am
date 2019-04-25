import { Component } from '@angular/core';
import { AstronautService } from './astronaut.service';
import { Observable } from 'rxjs';
import { Astronaut, FilterState, Filter, Option } from './types';
import { MatDialog } from '@angular/material/dialog';
import { AddAstronautComponent } from './add-astronaut/add-astronaut.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  astronauts: Observable<Astronaut[]>;
  filterState: FilterState;
  filters: Observable<Filter[]>;

  constructor(astronautService: AstronautService, private dialog: MatDialog) {
    this.astronauts = astronautService.astronauts;
    this.filterState = astronautService.filterState;
    this.filters = astronautService.filters;
  }

  changeFilter(category: string, option: Option) {
    this.filterState[category] = option;
  }

  addAstronaut() {
    this.dialog.open(AddAstronautComponent, {
      width: '500px',
      ariaLabel: 'Add an astronaut'
    });
  }
}

import { astronauts } from './astronauts';
import { Injectable } from '@angular/core';
import { FilterState, Filter, Option } from './types';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class AstronautService {
  astronauts = astronauts;
  filterState: FilterState = {};
  filters: Filter[];

  constructor() {
    this.filters = [{
      category: 'spaceWalks',
      displayName: 'Space walks',
      options: this.extractFilterOptions('spaceWalks')
    }, {
      category: 'undergraduateMajor',
      displayName: 'Undergraduate major',
      options: this.extractFilterOptions('undergraduateMajor')
    }];
  }

  extractFilterOptions(category: string): Option[] {
    this.filterState[category] = '';
    return _.chain(this.astronauts)
      .groupBy(category)
      .keys()
      .sort()
      .value();
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subject, debounceTime, filter } from 'rxjs';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
})
export class FilterBarComponent {
  filterControl = new FormControl('', Validators.required);

  filters: string[] = [];

  @Output()
  searchTriggeredEvent = new EventEmitter<string[]>();

  searchTriggeredDebouncer: Subject<string[]> = new Subject<string[]>();

  constructor() {
    this.searchTriggeredDebouncer.pipe(debounceTime(1000)).subscribe(keywords => this.searchTriggeredEvent.emit(keywords));
  }

  addFilter() {
    if (this.filterControl.valid) {
      const filterValue: string = this.filterControl.value!;
      if (this.filters.includes(filterValue)) {
        return;
      }

      this.filters.push(filterValue);
      this.filterControl.reset();
      this.searchTriggeredDebouncer.next(this.filters);
    }
  }

  removeFilter(filter: string) {
    const index = this.filters.indexOf(filter);

    if (index !== -1) {
      this.filters.splice(index, 1);
      this.searchTriggeredDebouncer.next(this.filters);
    }
  }

  clearFilters() {
    this.filterControl.reset();
    this.filters.length = 0;
    this.searchTriggeredDebouncer.next(this.filters);
  }
}

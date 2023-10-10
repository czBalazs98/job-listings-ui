import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { filter } from 'rxjs';

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

  addFilter() {
    if (this.filterControl.valid) {
      const filterValue: string = this.filterControl.value!;
      if (this.filters.includes(filterValue)) {
        return;
      }

      this.filters.push(filterValue);
      this.filterControl.reset();
      this.searchTriggeredEvent.emit(this.filters);
    }
  }

  removeFilter(filter: string) {
    const index = this.filters.indexOf(filter);

    if (index !== -1) {
      this.filters.splice(index, 1);
      this.searchTriggeredEvent.emit(this.filters);
    }
  }

  clearFilters() {
    this.filters.length = 0;
    this.searchTriggeredEvent.emit(this.filters);
  }
}

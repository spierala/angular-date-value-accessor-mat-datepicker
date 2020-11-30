import {Component} from '@angular/core';

/** @title Basic datepicker */
@Component({
  selector: 'datepicker-overview-example',
  templateUrl: 'datepicker-overview-example.html',
})
export class DatepickerOverviewExample {
  // date = new Date(2020, 11, 8); // LOCAL Date with 00:00 in local time
  date = new Date();
}

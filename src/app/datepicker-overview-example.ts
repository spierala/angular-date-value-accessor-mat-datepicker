import {Component} from '@angular/core';

/** @title Basic datepicker */
@Component({
  selector: 'datepicker-overview-example',
  templateUrl: 'datepicker-overview-example.html',
})
export class DatepickerOverviewExample {
  date = new Date();

  dateAsString = formatDate(this.date);
}

//https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd?page=1&tab=votes#tab-top
function formatDate(d: Date) {
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    let year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
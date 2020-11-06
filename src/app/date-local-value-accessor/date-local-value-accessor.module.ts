import { NgModule } from '@angular/core';
import { DateLocalValueAccessor } from './date-local-value-accessor.directive';

@NgModule({
  declarations: [DateLocalValueAccessor],
  exports: [DateLocalValueAccessor]
})
export class DateLocalValueAccessorModule { }

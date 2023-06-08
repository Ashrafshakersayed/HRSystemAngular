import { Pipe, PipeTransform } from '@angular/core';
import { Column } from '../models/column.model';

@Pipe({
  name: 'hiddenColumnFilter'
})
export class HiddenColumnFilterPipe implements PipeTransform {
  transform(cols: Column[]): Column[] {
    return cols.filter(col => !col.hidden);
  }
}

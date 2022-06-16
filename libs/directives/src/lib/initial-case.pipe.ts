import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initialCase'
})
export class InitialCasePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value?.substring(0,1).toUpperCase();
  }

}

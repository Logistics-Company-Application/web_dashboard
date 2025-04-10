import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTime'
})
export class DateTimePipe implements PipeTransform {

  transform(dateTimeString: string): string {
    const dateAndTimeArray = dateTimeString.split('T')
    const time = dateAndTimeArray[1].split('.')
    return time[0]+" EST on "+dateAndTimeArray[0];
  }

}

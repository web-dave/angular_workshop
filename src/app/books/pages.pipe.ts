import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pages',
})
export class PagesPipe implements PipeTransform {
  transform(value: number, label = 'Pages'): string {
    console.log('pipe', value);
    return `${label}: ${value}`;
  }
}

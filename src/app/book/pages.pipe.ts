import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pages',
  standalone: true,
})
export class PagesPipe implements PipeTransform {
  transform(value: number, text: string): string {
    console.log('Pipe', value);

    return `${text}: ${value}`;
  }
}

import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
  inject,
} from '@angular/core';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[orderBtn]',
  standalone: true,
})
export class OrderBtnDirective implements OnChanges {
  @Input() btnTxt: string = '';
  @HostListener('mouseenter', ['$event.target'])
  bla(target: HTMLDivElement) {
    target.style.backgroundColor = 'hotpink';
  }

  @HostListener('mouseleave', ['$event.target'])
  blub(target: HTMLDivElement) {
    target.style.backgroundColor = 'white';
  }

  orderBtnElement: HTMLButtonElement = document.createElement('button');
  hostref: ElementRef<HTMLDivElement> = inject(ElementRef);

  constructor() {
    this.hostref.nativeElement.appendChild(this.orderBtnElement);
    fromEvent(this.orderBtnElement, 'click').subscribe(() =>
      console.log('this.orderBtn:', this.btnTxt)
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.orderBtnElement.innerText = this.btnTxt;
  }
}

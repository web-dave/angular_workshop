import {
  Directive,
  ElementRef,
  inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[appOrderBtn]',
})
export class OrderBtnDirective implements OnInit, OnChanges {
  @Input() appOrderBtn: string = '';

  btnElem = document.createElement('button');
  hostRef = inject(ElementRef);

  ngOnInit(): void {
    (this.hostRef.nativeElement as HTMLParagraphElement).appendChild(
      this.btnElem
    );
    fromEvent(this.btnElem, 'click').subscribe(() =>
      console.log('Click', this.appOrderBtn)
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.btnElem.innerText = this.appOrderBtn;
  }
}

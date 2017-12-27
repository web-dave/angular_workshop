import {
  Directive,
  Input,
  ElementRef,
  OnChanges,
  HostListener
} from "@angular/core";
import { IBook } from "./custom-types";

@Directive({
  selector: "[orderBtn]"
})
export class OrderBtnDirective implements OnChanges {
  orderBtnElement: HTMLButtonElement = document.createElement("button");
  myObj;
  @Input() orderBtn: IBook;

  ngOnChanges(changeObj) {
    this.orderBtnElement.innerText = "Buy me: " + this.orderBtn.title;
  }

  @HostListener("mouseenter")
  onMouseEnter() {
    console.log("mouseenter");
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    console.log("mouseleave");
  }

  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.appendChild(this.orderBtnElement);
    this.orderBtnElement.onclick = () => {
      console.log("this.orderBtn:", this.orderBtn);
    };
  }
}

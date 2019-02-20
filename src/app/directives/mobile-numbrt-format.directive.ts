import { Directive, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMobileNumbrtFormat]'
})
export class MobileNumbrtFormatDirective implements OnInit {

  private el: HTMLInputElement;

  constructor(private elementRef: ElementRef) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.el.value = this.el.value;
  }

  @HostListener("focus", ["$event.target.value"])
  onFocus(value:string) {
    this.el.value = value.replace('-',''); // opossite of transform
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value:string) {
    debugger
    this.el.value = '('+ value.slice(0, 3) + ') -' + value.slice(3,6);
  }

}

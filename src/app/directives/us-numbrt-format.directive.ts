import { Directive, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUsNumbrtFormat]'
})
export class UsNumbrtFormatDirective implements OnInit {

  private el: HTMLInputElement;

  constructor(private elementRef: ElementRef) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.el.value = this.el.value;
  }

  @HostListener("focus", ["$event.target.value"])
  onFocus(value: string) {
    this.el.value = value.replace(' ', '');
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value: string) {
    debugger
    this.el.value = value.substr(0, 3) + ' ' + value.substr(3, 8);
  }

}

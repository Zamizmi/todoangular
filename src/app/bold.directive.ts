import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBolder]'
})
export class BoldDirective {
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.bold(700);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.bold(100);
  }

  private bold(value: number) {
    this.el.nativeElement.style.fontWeight = value;
  }
}

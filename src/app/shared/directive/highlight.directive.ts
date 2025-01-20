import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTextColor]',
  standalone: true, // No need for module declaration
})
export class TextColorDirective {
  @Input() color: string = 'blue';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor(this.color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('');
  }

  private changeColor(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
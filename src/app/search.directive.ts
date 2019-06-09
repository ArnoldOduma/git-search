import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSearch]'
})
export class SearchDirective {

  constructor(private elem: ElementRef) {
    elem.nativeElement.style.backgroundColor = 'rgba(249, 165, 49, 0.2)';
  }

}

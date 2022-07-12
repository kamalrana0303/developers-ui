import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[developersChangeBGCOnScroll]',
  host: {
    '(scroll)': 'onScroll($event)'     // on scrolling host
  }
})
export class ChangeBGCOnScrollDirective {
  @Output()  isScroll:EventEmitter<boolean>  = new EventEmitter<boolean> ();
  constructor(private elementRef:ElementRef, private renderer: Renderer2) { }

  onScroll($event:any){
    if($event.srcElement.scrollTop > 0){
      this.isScroll.emit(true);
    }
    else{
      this.isScroll.emit(false);
    }
  }

}

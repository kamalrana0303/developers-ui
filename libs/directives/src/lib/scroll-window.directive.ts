import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[developersScrollWindow]'
})
export class ScrollWindowDirective {
  
  constructor(private elementRef:ElementRef, private renderer: Renderer2) { 
    this.hideVisibilityWhenScrolledByFixedAmount(elementRef)
    
  }

  hideVisibilityWhenScrolledByFixedAmount(elementRef:ElementRef){
    var rect = elementRef.nativeElement.getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);
  }

  @HostListener('window:scroll',['$event'])
  onScroll(event:any){
    var rect = this.elementRef.nativeElement.getBoundingClientRect();
    console.log(rect.top)
    if(rect.top<0){
      
      var header=document.getElementById("app-header-mat-toolbar");
    
      if(header){
        
        this.renderer.setProperty(header, '@openClose', false);
        
     //   console.log(document.getElementById("header"));
      }
    }
    else{
      var header=document.getElementById("app-header-mat-toolbar");
      if(header){
       this.renderer.setProperty(header, '@openClose', true);
      // console.log(document.getElementById("header"));
      }

    }
  // console.log(rect.top, rect.right, rect.bottom, rect.left);
  }
}

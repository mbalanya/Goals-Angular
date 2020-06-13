import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appStriketrough]'
})
export class StriketroughDirective {

  constructor(private elem:ElementRef) { }

  @HostListener('click') onClicks(){
    this.textDeco('line-through')
  }

  @HostListener('dblclick') onDoubleClicks(){
    this.textDeco('None')
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;
  }

}

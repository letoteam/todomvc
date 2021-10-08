import { Directive, Input, ElementRef} from '@angular/core';

@Directive({
  selector: '[appTodoStatus]',
  exportAs: 'todoStatus'
})
export class TodoStatusDirective {
  @Input() todoIsActive = true;
  constructor(el: ElementRef) {
    this.toggleStatus(el.nativeElement, this.todoIsActive)
  }
  toggleStatus(el: any, todoIsActive: boolean){
    todoIsActive
    ? el.classList.remove('completed') 
    : el.classList.add('completed');
  }
  text(el: any){
    console.log(el.classList);
  }
}

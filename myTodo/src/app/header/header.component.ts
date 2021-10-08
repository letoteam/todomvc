import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() todoList: any[];
  @Output() todoAdded: EventEmitter<any> = new EventEmitter();

  
  constructor() {
    this.todoList = [];
  }

  

  public addTodo(e: Event){
    const input = e.target as HTMLTextAreaElement;
    const todo = {
      content: input.value.trim(),
      isActive: true
    }

    if(todo.content !== ''){ 
      this.todoList.push(todo);
      input.value = '';
      this.todoAdded.emit();

      console.log(this.todoList);
    }
  }
  ngOnInit(): void {
  }

}

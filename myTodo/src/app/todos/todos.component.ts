import { AfterViewInit, Component, Directive, Input, OnInit } from '@angular/core';

@Directive({selector: 'todoElem'})
class TodoElem {

}
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
  
  @Input() todoList: any[];

  todoItemClassList: string;
  constructor() { 
    this.todoList = [];
    this.todoItemClassList = '';
  }

  toggleStatus(todo:any){
    todo.isActive = !todo.isActive;
    console.log(todo);
  }
  destroyTodo(todo:any){
    let todoIndex = this.todoList.findIndex(todoIndex => todoIndex.id === todo.id);
    this.todoList.splice(todoIndex, 1);
    console.log(this.todoList);
  }
  showEditingInput(todo: any){
    todo.isEditing = true;
    // console.log(this.viewTodo.find());
    this.todoItemClassList =  'editing';
  }
  changeTodoContent(ev: Event, todoId: number){
    let todo = this.todoList.find(todo => todo.id === todoId);
    let inputValue : string = (ev.target as HTMLInputElement).value;
    if(inputValue.trim() != ''){
      todo.content = inputValue;
      todo.isEditing = false;
    }else{
      this.destroyTodo(todo);
    }
  
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
  }

}

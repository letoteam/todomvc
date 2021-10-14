import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
  
  todoList: any[];
  todoListForView: any[] = [];
  todoItemClassList: string;
  private idCounter: number = 1;

  constructor(private router: Router) { 
    this.todoList = [];


    router.events.subscribe((event: any) => {
      switch(event.url){
        case '/': 
          this.todoListForView = this.todoList;
          break;
        case '/active':
          this.todoListForView = this.todoList.filter(todo => todo.isActive);
          break;
        case '/completed':
          this.todoListForView = this.todoList.filter(todo => !todo.isActive);
          break;
      }

      console.log(event);
    });
    this.todoItemClassList = '';
  }

  public addTodo(e: Event){
    const input = e.target as HTMLTextAreaElement;
    const todo = {
      id: this.idCounter,
      content: input.value.trim(),
      isActive: true, 
      isEditing: false,
    }
    this.idCounter++;

    if(todo.content !== ''){ 
      this.todoList.push(todo);
      this.todoListForView = this.todoList.concat();
      input.value = '';

      console.log(this.todoList, this.todoListForView);
    }
  }
  todoIndex(todo: any): number{
    return this.todoList.findIndex(todoIndex => todoIndex.id === todo.id);
  }
  toggleStatus = (todo:any) => todo.isActive = !todo.isActive;

  destroyTodo(todo:any){
    let todoIndex = this.todoIndex(todo);
    this.todoList.splice(todoIndex, 1);
    this.todoListForView.splice(todoIndex, 1);
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

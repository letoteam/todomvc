import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
  
  todoList: any[] = [];
  todoListForView: any[] = [];
  todoListIsEmpty: boolean;
  haveCompleted: boolean;
  mustBeDone: boolean;
  private idCounter: number = 1;

  constructor(private router: Router) { 
    this.todoList.length === 0 ? this.todoListIsEmpty = true : this.todoListIsEmpty = false;
    console.log(this.todoListIsEmpty);
    this.haveCompleted = false;
    this.mustBeDone = true;

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
    });
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

      this.todoListIsEmpty = false;
      console.log(this.todoListIsEmpty);
    }
  }

  checkCompleted(){
    this.todoList.find(todo => todo.isActive ? this.haveCompleted = false : this.haveCompleted = true);
  }

  todoIndex(todo: any): number{
    return this.todoList.findIndex(todoIndex => todoIndex.id === todo.id);
  }

  checkIsTodoEmpty(){
    if(this.todoList.length === 0) {
      this.todoListIsEmpty = true;
    }else{
      this.todoListIsEmpty = false;
    }
  }

  toggleStatus = (todo:any) => todo.isActive = !todo.isActive;
  toggleAllStatus(){
    if(this.mustBeDone){
      this.todoList.forEach(todo => {
        todo.isActive = false;
        this.mustBeDone = false;
      });
    }
    else{
      this.todoList.forEach(todo => {
        todo.isActive = true;
        this.mustBeDone = true;
      });
    }
  }
  destroyTodo(todo:any){
    let todoIndex = this.todoIndex(todo);
    this.todoList.splice(todoIndex, 1);
    this.todoListForView.splice(todoIndex, 1);
    this.checkCompleted();
    this.checkIsTodoEmpty();
  }
  showEditingInput(todo: any){
    todo.isEditing = true;
  }
  changeTodoContent(ev: Event, todoId: number){
    let todo = this.todoList.find(todo => todo.id === todoId);
    let inputValue : string = (ev.target as HTMLInputElement).value;
    if(inputValue.trim() != ''){
      todo.content = inputValue;
      todo.isEditing = false;
      this.checkCompleted();
    }else{
      this.destroyTodo(todo);
    }
  
  }
  clearCompleted(){
    let completedTasks = this.todoList.filter(todo => !todo.isActive);
    completedTasks.forEach(todo => {
      this.destroyTodo(todo);
      this.haveCompleted = false;
      this.checkIsTodoEmpty();
    });
    // this.checkCompleted();
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
  }

}

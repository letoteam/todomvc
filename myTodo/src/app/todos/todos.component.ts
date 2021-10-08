import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  @Input() todoList: any[];

  constructor() { 
    this.todoList = [];
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

  ngOnInit(): void {
  }

}

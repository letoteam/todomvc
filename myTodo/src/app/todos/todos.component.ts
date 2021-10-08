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

  ngOnInit(): void {
  }

}

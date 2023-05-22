import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input() 
todo!:todo;
@Input()
i!:number
// event emitter
@Output()
todoDelete:EventEmitter<todo> = new EventEmitter();
@Output()
todocheckbox:EventEmitter<todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onclick(todo:todo){
    this.todoDelete.emit(todo);
    console.log("hey this record is deleted");
  }

  oncheck(todo:todo){
   
    this.todocheckbox.emit(todo);
   

  }

}

import { Component, OnInit } from '@angular/core';
import { todo} from "../../todo";
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos!:todo[];
  
  localItem: string|any;
  constructor() {
   this.localItem = localStorage.getItem("todos");
    if(this.localItem== null) 
    {
      this.todos=[];
    }
    else{
      this.todos =JSON.parse(this.localItem)
    }
  }

  ngOnInit(): void {
  }
  deletetodo(todo:todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  Addtodo(todo:todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }
  toggletodo(todo:todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active =!this.todos[index].active;    
    localStorage.setItem("todos",JSON.stringify(this.todos));


  }
}

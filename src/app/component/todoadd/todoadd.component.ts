import { Component, OnInit,Output ,EventEmitter} from '@angular/core';
import {  FormControl, FormGroup} from "@angular/forms";
import { todo } from 'src/app/todo';
@Component({
  selector: 'app-todoadd',
  templateUrl: './todoadd.component.html',
  styleUrls: ['./todoadd.component.css']
})
export class TodoaddComponent implements OnInit {

  title!:string;
  desc!:string;

  
// event emitter
@Output()
todoAdd:EventEmitter<todo> = new EventEmitter();
 
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log("todo Add")
    const todo ={
      sno:8,
      title:this.title,
      desc:this.desc,
      active:true
    }
    this.todoAdd.emit(todo);
  }
}

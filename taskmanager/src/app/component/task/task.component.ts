import { Component, OnInit } from '@angular/core';
import {tasks } from '../../mock-tasks';
import { task } from "../../task";
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

    tasks: task[] = tasks
  constructor() { }

  ngOnInit(): void {
  }

}

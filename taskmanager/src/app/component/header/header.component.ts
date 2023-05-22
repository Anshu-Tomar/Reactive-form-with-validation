import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Task-Manager';
  toggle1!: string;
  constructor() { }

  ngOnInit(): void {
  }
  toggleadd(){
     this.toggle1 = "Add successfully work  "
  }
}

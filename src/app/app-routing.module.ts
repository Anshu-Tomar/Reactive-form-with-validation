import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoItemComponent } from './component/todo-item/todo-item.component';
import { TodoComponent } from './component/todo/todo.component';
import { TodoaddComponent } from './component/todoadd/todoadd.component';

const routes: Routes = [
  {path:"",component:TodoComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

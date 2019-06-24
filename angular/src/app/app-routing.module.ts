import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { CreateTaskComponent } from './create-task/create-task.component';
import { NoteEditorComponent } from './note-editor/note-editor.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  { path: 'createTask', component: CreateTaskComponent },
  { path: 'editTask/:id', component: NoteEditorComponent },
  { path: 'taskList', component: TaskListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

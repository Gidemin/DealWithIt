import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Task } from '../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  public tasks: Task[] = [];

  constructor(private router: Router) {
      for (let i = 0; i < 20; i++) {
         this.tasks.push(new Task('task_' + i, i + ' Test_data'));
      }
  }

  createTask() {
    this.router.navigate(['/createTask']);
  }

}

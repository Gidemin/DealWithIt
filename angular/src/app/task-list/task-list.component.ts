import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  constructor(private router: Router) { }

  createTask() {
    this.router.navigate(['/createTask']);
  }

}

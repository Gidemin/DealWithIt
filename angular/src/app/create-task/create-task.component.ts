import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {

  constructor(private router: Router) { }

  backToTaskList() {
    this.router.navigate(['/taskList']);
  }

}

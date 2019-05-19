import {
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  @ViewChild('text') textInput: ElementRef;
  createTaskForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.createTaskForm = this.formBuilder.group({
      title: '',
      text: ''
    });
  }

  ngOnInit() {
   this.textInput.nativeElement.focus();
  }

  createNote() {
    console.log(this.createTaskForm.controls['title'].value, this.createTaskForm.controls['text'].value);
  }

  backToTaskList() {
    this.router.navigate(['/taskList']);
  }

}

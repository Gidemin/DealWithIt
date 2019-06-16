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

import { GlobalDataService } from '../global-data.service';
import { Note } from '../models/note';

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
    private globalDataService: GlobalDataService,
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
    this.globalDataService.addRecord(new Note(
      this.createTaskForm.controls['text'].value,
      this.createTaskForm.controls['title'].value
    ));
    this.backToTaskList();
  }

  backToTaskList() {
    this.router.navigate(['/taskList']);
  }

}

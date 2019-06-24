import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';
import {
  ActivatedRoute,
  Router
} from '@angular/router';

import { GlobalDataService } from '../global-data.service';
import { Note } from '../models/note';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.scss']
})
export class NoteEditorComponent implements OnInit {

  private noteId: number;
  public noteObject: Note;
  editTaskForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private dataService: GlobalDataService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.noteId = +this.route.snapshot.paramMap.get('id');
    this.dataService.getRecord(this.noteId).subscribe( note => {
      this.noteObject = note;
      this.editTaskForm = this.formBuilder.group({
        title: this.noteObject.title,
        text: this.noteObject.text
      });
    });
  }

  ngOnInit() {}

  goBack() {
    if (
      (this.noteObject.title !== this.editTaskForm.controls['title'].value
      || this.noteObject.text !== this.editTaskForm.controls['text'].value)
      && window.confirm('Note text was changed. Ceep changes?')
      ) {
        this.saveRecord();
      }
    this.router.navigate(['/taskList']);
  }

  saveRecord() {
    const tempData = new Note(
      this.editTaskForm.controls['text'].value,
      this.editTaskForm.controls['title'].value
    );
    this.dataService.overriveRecord(this.noteId, tempData);
  }

}

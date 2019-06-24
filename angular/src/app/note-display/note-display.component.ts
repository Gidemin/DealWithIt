import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import { Router } from '@angular/router';

import { GlobalDataService } from '../global-data.service';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-note-display',
  templateUrl: './note-display.component.html',
  styleUrls: ['./note-display.component.scss']
})
export class NoteDisplayComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<TaskListComponent>,
    private globalDataService: GlobalDataService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() { }

  removeNote() {
    this.globalDataService.deleteRecord(this.data.noteObjectNumber);
    this.dialogRef.close();
  }

  openTaskEditScreen() {
    this.router.navigate(['/editTask/' + this.data.noteObjectNumber.toString()]);
    this.dialogRef.close();
  }

}

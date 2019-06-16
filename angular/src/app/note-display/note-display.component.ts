import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';

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
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() { }

  removeNote() {
    this.globalDataService.deleteRecord(this.data.noteObjectNumber);
    this.dialogRef.close();
  }

}

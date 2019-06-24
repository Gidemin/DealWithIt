import {
  Component,
  OnInit
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

import { GlobalDataService } from '../global-data.service';
import { NoteDisplayComponent } from '../note-display/note-display.component';
import { Note } from '../models/note';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  public notes: Note[] = [];

  constructor(
    private globalDataService: GlobalDataService,
    private noteViewDialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    this.getData();
  }

  createTask() {
    this.router.navigate(['/createTask']);
  }

  saveData() {
    this.globalDataService.insertDataToStorage(this.notes);
  }

  getData() {
    this.globalDataService.extractDataFromStorage().subscribe(data => {
      this.notes = data;
    });
  }

  clearData() {
    this.globalDataService.clearData();
  }

  openNoteViewDialog(noteNumber: number) {
    const dialogRef = this.noteViewDialog.open(
      NoteDisplayComponent,
      {
        data: {
          noteObject: this.notes[noteNumber],
          noteObjectNumber: noteNumber
        },
        minWidth: '35%'
      }
    );
    dialogRef.afterClosed().subscribe(() => {
      this.getData();
    });
  }

}

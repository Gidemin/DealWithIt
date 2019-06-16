import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable
} from 'rxjs';

import { Note } from './models/note';

@Injectable()
export class GlobalDataService {

  private data = new BehaviorSubject([]);

  constructor() {
    if (!localStorage.getItem('data')) {
      localStorage.setItem('data', '[]');
    } else {
      this.extractDataFromStorage();
    }
  }

  extractDataFromStorage(): Observable<any> {
    const tempData = JSON.parse(localStorage.getItem('data'));
    const tempDataArray = [];
    for (const dataObject of tempData) {
      if (dataObject.text && dataObject.text !== null) {
        tempDataArray.push(new Note(dataObject.text, dataObject.title));
      }
    }
    this.data.next(tempDataArray);
    return this.data.asObservable();
  }

  insertDataToStorage(object: any) {
    this.data.next(object);
    localStorage.setItem('data', JSON.stringify(this.data.value));
  }

  clearData() {
    localStorage.setItem('data', '[]');
    this.data.next([]);
  }

  addRecord(object: any) {
    let tempData = this.data.value;
    tempData.push(object);
    this.insertDataToStorage(tempData);
  }

  deleteRecord(noteId: number) {
    let tempData = this.data.value;
    tempData.splice(noteId, 1);
    this.data.next(tempData);
    localStorage.setItem('data', JSON.stringify(this.data.value));
  }

}

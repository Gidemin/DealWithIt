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
    const tempRawData = JSON.parse(localStorage.getItem('data'));
    const tempDataArray = [];
    for (const dataObject of tempRawData) {
      if (dataObject.text) {
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
    const tempData = this.data.value;
    tempData.push(object);
    this.insertDataToStorage(tempData);
  }

  deleteRecord(id: number) {
    const tempData = this.data.value;
    tempData.splice(id, 1);
    this.insertDataToStorage(tempData);
  }

  getRecord(id: number): Observable<any> {
    const record = this.data.value[id];
    return new Observable(observer => observer.next(record));
  }

  overriveRecord(id: number, record: Note) {
    const tempData = this.data.value;
    tempData.splice(id, 1, record);
    this.insertDataToStorage(tempData);
  }

}

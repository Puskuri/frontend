import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getData(): any {
    console.log("funktiossa getData!!");
    return "";
  }
}

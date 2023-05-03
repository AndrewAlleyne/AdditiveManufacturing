import { Injectable } from '@angular/core';

//To be used for demo purposes only

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  private chartStorage: string = 'Settings';

  constructor() {}
  setSettings(data: any) {
    localStorage.setItem(this.chartStorage, JSON.stringify(data));
  }

  getUserSettings() {
    let data = localStorage.getItem(this.chartStorage);
    if (data !== null) {
      return JSON.parse(data);
    }
    return 'null';
  }

  clearUserSettings() {
    localStorage.removeItem(this.chartStorage);
  }

  cleanAll() {
    localStorage.clear();
  }
}

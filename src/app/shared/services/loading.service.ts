import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  globalBar: boolean = false;
  globalSpinner: boolean = false;
  localSpinner: boolean = false;

  constructor() {
  }

  showLocalSpinner() {
    setTimeout(() => {
      this.localSpinner = true;
    });
  }
  hideLocalSpinner() {
    setTimeout(() => {
      this.localSpinner = false;
    });
  }

  showGlobalBar() {
    setTimeout(() => {
      this.globalBar = true;
    });
  }
  hideGlobalBar() {
    setTimeout(() => {
      this.globalBar = false;
    });
  }

  showGlobalSpinner() {
    setTimeout(() => {
      this.globalSpinner = true;
    });
  }
  hideGlobalSpinner() {
    setTimeout(() => {
      this.globalSpinner = false;
    });
  }
}

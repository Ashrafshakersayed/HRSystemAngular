import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private messageService: MessageService) { }

  successMessage(title:string,message:string) {
    this.messageService.add({severity:'success', summary:title, detail:message});
   }

   errorMessage(title:string,message:string) {
    this.messageService.add({severity:'error', summary:title, detail:message});
   }

   infoMessage(title:string,message:string) {
    this.messageService.add({severity:'info', summary:title, detail:message});
   }
}

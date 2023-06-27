import { Injectable } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MessageType } from '../enums/message-type.enum';

declare let $: any;

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  constructor(
    private _messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
  }

  //#region Messaging
  public messageAlert(
    messageType: MessageType,
    message: string,
    messageParams?: { [key: string]: any }
  ) {
    this._messageAlert(messageType,'',message);
  }


  private _messageAlert(messageType: MessageType,title:string, message: string) {
    this._messageService.add({severity:messageType, summary:title, detail:message});
  }



  public messageConfirm(
    title: string,
    onDelete: Function,
  ) {
    this.confirmationService.confirm({
        message: title,
        accept: () => {
          onDelete();
        }
    });
  }
}

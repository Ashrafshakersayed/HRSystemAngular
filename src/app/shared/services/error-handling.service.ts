import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { MessageType } from 'src/app/shared/enums/message-type.enum';
import { SharedMessages } from 'src/app/shared/enums/shared-message.enum';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { MessagingService } from './messaging.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlingService {
  constructor(
    private _messagingService: MessagingService,
    private router: Router,
    private route: ActivatedRoute,
    private _loadingService: LoadingService
  ) {}
  public errorHandler(error: HttpErrorResponse) {
    this._loadingService.hideGlobalBar();
    if (error.status === 401) {
      this._messagingService.messageAlert(
        MessageType.Error,
        SharedMessages.NotAuthorized
      );
      this.router.navigateByUrl('/auth/login');
    } else if (error.status === 400) {
      if (error.error && error.error.errors) {
        var keys = Object.keys(error.error.errors);
        var errors = error.error.errors;
        keys.forEach((key) => {
          var message = key + ' : ' + errors[key].join(',');
          this._messagingService.messageAlert(MessageType.Error, message);
        });
      } else {
        this._messagingService.messageAlert(
          MessageType.Error,
          error.error ? error.error : SharedMessages.ValidationError
        );
      }
    } else if (error.status === 404) {
      this._messagingService.messageAlert(
        MessageType.Error,
        error.error ? error.error : SharedMessages.Error
      );
    } else if (error.status === 0) {
      this._messagingService.messageAlert(
        MessageType.Error,
        SharedMessages.NoConnection
      );
    } else if (error.status === 500) {
      this._messagingService.messageAlert(
        MessageType.Error,
        SharedMessages.Error
      );
    }
    return throwError(error);
  }
}

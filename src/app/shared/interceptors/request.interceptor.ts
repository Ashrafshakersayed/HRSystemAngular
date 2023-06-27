import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpEventType,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { MessagingService } from 'src/app/shared/services/messaging.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { environment } from 'src/environments/environment';
import { ErrorHandlingService } from '../services/error-handling.service';
@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(
    private _errorHandlingService: ErrorHandlingService,
    private _MessageServie: MessagingService,
    private _loadingService: LoadingService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem(environment.tokenKey);

    if (token) {
      request = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token),
      });
    }

    this._loadingService.showGlobalBar();

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this._loadingService.hideGlobalBar();
        }
        return event;
      }),
      catchError((err) => this._errorHandlingService.errorHandler(err))
    );
  }
}

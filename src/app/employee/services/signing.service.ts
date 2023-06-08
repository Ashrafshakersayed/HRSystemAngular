import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SigningService {
  constructor(private http: HttpClient) {}

  signIn(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/Signing/Signin/` + id);
  }
  signOut(id: number): Observable<any> {
    return this.http.put<any>(
      `${environment.apiUrl}/api/Signing/Signout/` + id,
      {}
    );
  }
}

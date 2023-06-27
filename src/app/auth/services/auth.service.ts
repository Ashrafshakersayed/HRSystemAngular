import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserDto } from '../models/UserDto';
import { LoginDto } from '../models/LoginDto';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user?: UserDto;
  
  constructor(private http: HttpClient,private router: Router) { }
  Register(user: UserDto) {
    return this.http.post<any>(`${environment.apiUrl}/api/auth/register`, user);
  }

  Login(login: LoginDto) {
    return this.http.post<any>(`${environment.apiUrl}/api/auth/Login`, login);
  }

  setToken(token:string){
    localStorage.setItem(environment.tokenKey, token);
    this.router.navigate(['/']);
  }

  signOut() {
    localStorage.removeItem(environment.tokenKey)
  }

  get isAuthenticated(): boolean {
    return  localStorage.getItem(environment.tokenKey) !== null;
  }
}

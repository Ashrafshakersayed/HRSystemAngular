import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WorkingHourDto } from '../models/working-hour';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkingHourService {

  constructor(private http: HttpClient) { }
  getMany():Observable<WorkingHourDto[]> {
    return this.http.get<WorkingHourDto[]>(`${environment.apiUrl}/api/Signing/GetWorkingHours`);
  }
}

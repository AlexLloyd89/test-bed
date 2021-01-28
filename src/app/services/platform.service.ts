import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Platform } from '../models/platform.model';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor(private http: HttpClient) { }

  getPlatforms():Observable<Platform[]>{
   return this.http.get<Platform[]>(`${environment.baseUrl}/Platforms`)
  }
}

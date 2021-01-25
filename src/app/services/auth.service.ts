import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<string> {
    let params = new HttpParams()
    params = params.append('username', username)
    params = params.append('password',password)

    return this.http.get<string>(`${environment.baseUrl}/login`, {params})
  }

}
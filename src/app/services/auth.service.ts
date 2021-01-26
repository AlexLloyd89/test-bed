import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  userToken$ = new BehaviorSubject<string>('')

  login(username: string, password: string): Observable<string> {
    let params = new HttpParams()
    params = params.append('username', username)
    params = params.append('password',password)
    const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
    }
    return this.http.get<string>(`${environment.baseUrl}/login`, {headers, params})
  }

}

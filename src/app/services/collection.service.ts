import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Collection } from '../models/collection.model';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  apiUrl: string = `${environment.baseUrl}/Collection`

  constructor(private http: HttpClient) { }

  getCollection():Observable<Collection[]>{
    return this.http.get<Collection[]>(`${this.apiUrl}`)
  }

  deleteItem(gameId: number) {
    return this.http.delete(`${this.apiUrl}/${gameId}`)
  }

  addItem(gameId:number) {
    return this.http.post(`${this.apiUrl}/${gameId}`, null)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Collection } from '../models/collection.model';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private http: HttpClient) { }

  getCollection():Observable<Collection[]>{
    return this.http.get<Collection[]>(`${environment.baseUrl}/Collection`)
  }

  deleteItem(gameId: number) {
    return this.http.delete(`${environment.baseUrl}/Collection/${gameId}`)
  }

  addItem(gameId:number){
    return this.http.post(`${environment.baseUrl}/Collection/${gameId}`, null)
  }
}

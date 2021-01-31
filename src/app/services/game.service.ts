import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Collection } from '../models/collection.model';
import { GameDetail } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  apiUrl = `${environment.baseUrl}/Games`

  constructor(private http: HttpClient) { }

  getGameDetail(gameId: number): Observable<GameDetail>{
    return this.http.get<GameDetail>(`${this.apiUrl}/${gameId}`)
  }

  searchGames(gameName: string, platformId?: number): Observable<Collection[]>{
    return this.http.get<Collection[]>(`${this.apiUrl}/search/${gameName}/?platformId=${platformId || 0}`)
  }
}

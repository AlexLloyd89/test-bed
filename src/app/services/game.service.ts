import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GameDetail } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  getGameDetail(gameId: number): Observable<GameDetail>{
    return this.http.get<GameDetail>(`${environment.baseUrl}/Games/${gameId}`)
  }
}

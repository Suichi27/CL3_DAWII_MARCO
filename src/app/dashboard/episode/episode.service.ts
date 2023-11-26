import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Episode } from './episode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(
    private http: HttpClient
  ) { }

  listarEpisodios(): Observable<Episode[]>{
    return this.http.get<Episode[]>("https://rickandmortyapi.com/api/episode");
  }
}

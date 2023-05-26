import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anuncio } from './anuncios';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {
   url = "http://localhost:3000/anuncios";
  constructor(private http: HttpClient) {}
  getAnuncios(): Observable<Anuncio[]>{
  return this.http.get<[Anuncio]>(this.url);
  }
  save(Anuncio: Anuncio): Observable<Anuncio>{
    return this.http.post<Anuncio>(this.url, Anuncio);

  }
  edit(Anuncio: Anuncio): Observable<Anuncio>{
    return this.http.put<Anuncio>(`${this.url}/${Anuncio.id}`, Anuncio);
  }
  delete(Anuncio: Anuncio): Observable<void>{
    return this.http.delete<void>(`${this.url}/${Anuncio.id}`);

  }


}

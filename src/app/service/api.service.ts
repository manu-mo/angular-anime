import { Injectable } from '@angular/core';
import data from "./ResApi.json";
import { AnimeApiRes } from '../models/anime.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class APIService {

  constructor(private httpClient: HttpClient) { }

  listAnime() {
    return this.httpClient.get<AnimeApiRes>('assets/json/data.json').pipe(
      map(response => response.data),
    );
    // return <Anime[]>data.data;
  }

  searchAnime(query: string) {
    for (const el of data.data) {
      if (el.title == query) {
        return el;
      } else {
        return null;
      }
    }

  }
}

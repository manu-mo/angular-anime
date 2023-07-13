import { Injectable } from '@angular/core';
import data from "./ResApi.json";
import { Anime, AnimeDetail } from '../pages/models/anime.model';

@Injectable({
  providedIn: 'root'
})

export class APIService {

  constructor() { }

  listAnime() {
    return <Anime[]>data.data;
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

import { Component } from '@angular/core';
import { Anime, AnimeDetail } from '../models/anime.model';
import { APIService } from 'src/app/service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  anime: Anime[] = [];
  name: string = "";

  constructor(private apiService: APIService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.anime = this.apiService.listAnime();
  }

  searchByName(query: string) {
    this.anime = this.apiService.searchAnime(query);
    console.log(this.anime);
    
  }
}

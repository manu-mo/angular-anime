import { Component } from '@angular/core';
import { Anime } from '../../models/anime.model';
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
    this.apiService.listAnime().subscribe((res) => {
      this.anime = res as Anime[];
      console.log('--- result :: ', this.anime);
    })
  }

  searchByName(query: string) {
    this.anime = this.apiService.searchAnime(query);
    console.log(this.anime);
  }



}

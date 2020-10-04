import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../movies.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  trendingMovies=[];
  trendingTv=[];
  imgprefix='https://image.tmdb.org/t/p/w500/';


  constructor(_MoviesService:MoviesService) {

    _MoviesService.getTrendingmovies().subscribe((data)=>{
      this.trendingMovies=data.results;
    },(er) =>{ console.log(er);}

    )
    _MoviesService.getTrendingTv().subscribe((data)=>{
      this.trendingTv=data.results;
    },(er) =>{ console.log(er);}

    )
   }

  ngOnInit(): void {
  }


}

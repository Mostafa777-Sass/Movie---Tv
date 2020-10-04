import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "../movies.service";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  id:any;
  movieDetails:any;
  tvDetails:any;
  topTen:any=[];
  isLoading:boolean= false;
  imgprefix='https://image.tmdb.org/t/p/w500/';
  constructor(public _ActivatedRoute:ActivatedRoute,_MoviesService:MoviesService) {
    this.id= _ActivatedRoute.snapshot.paramMap.get('id');
    _MoviesService.getMoviedeatels(this.id).subscribe(data=>{

this.movieDetails=data;
this.isLoading=true;
    })
    _MoviesService.getTrendingmovies().subscribe(movies=>{
      for (let i = 0; i < 10; i++) {
        this.topTen.push(movies.results[i])

      }
    })
    // _MoviesService.getTvdeatels(this.id).subscribe(data=>{
    //   this.tvDetails=data;
    //       })

  }

  ngOnInit(): void {
  }

}

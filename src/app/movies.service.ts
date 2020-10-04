import { Injectable } from '@angular/core';
import {HttpClient  } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public _HttpClient:HttpClient) {

   }



  getTrendingmovies():Observable<any> {
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/week?api_key=e5443f08ae46247baf3ff1afc9d87e94')
  }

  getTrendingTv():Observable<any> {
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/week?api_key=e5443f08ae46247baf3ff1afc9d87e94')
  }


  getMoviedeatels(id):Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=e5443f08ae46247baf3ff1afc9d87e94&language=en-US`)
  }
  // getTvdeatels(id):Observable<any> {
  //   return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=e5443f08ae46247baf3ff1afc9d87e94&language=en-US`)
  // }

}

import { Component } from '@angular/core';
import { OmdbApiService } from 'src/app/services/omdb-api.service';
import { IOMDBResponse2 } from 'src/app/omdbresponse2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
movieData: IOMDBResponse2 | any;
error: any;
currentPage = 1;
maxPages = 0;
constructor(private _omdbService:OmdbApiService) {}
getMovieDetails(movieName:string): boolean {
  console.log(this.movieData);
  this._omdbService.getMovieData(movieName).subscribe(
    movieData=> {
      this.movieData=movieData;
    
    }
  )
  return false;
}
getPreviousPage(movieName:string) : boolean {
  this.currentPage--;
  if (this.currentPage<1)
  this.currentPage=1;
  this._omdbService.getMoviesData(movieName, this.currentPage).subscribe(
    movieData => {
      this.movieData=movieData;
    }
  )
  return false;
}
getNextPage(moviename:string) {
this.currentPage++;


}}

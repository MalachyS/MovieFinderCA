import { Component } from '@angular/core';
import { OmdbApiService } from 'src/app/services/omdb-api.service';
import { IOMDBResponse } from 'src/app/omdbresponse';

@Component({
  selector: 'app-searchtitle',
  templateUrl: './searchtitle.component.html',
  styleUrls: ['./searchtitle.component.css']
})
export class SearchtitleComponent {
  movieData:IOMDBResponse | undefined;
  errorMessage:any;
  constructor(private _omdbService:OmdbApiService) {}
  getMovieDetails(movieName:string): boolean {
    this._omdbService.getMovieData(movieName).subscribe(
      movieData => {
        this.movieData=movieData;
        console.log("Director name : " + this.movieData.Director);
      }
    )
    return false;
  }

}

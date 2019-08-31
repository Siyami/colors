import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class HttpService {
  apiUrl: string = 'http://www.colr.org/json/colors/random/100';
  error: any;

  constructor(private _http: HttpClient) {}

  getColors() {
    return this._http.get(this.apiUrl)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(error => this.error = error) // then handle the error
      );
  }
}

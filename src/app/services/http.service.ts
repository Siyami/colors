import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class HttpService {
  apiUrl: string = 'http://www.colr.org/json/colors/random/150';
  error: any;
  randomColorsArr = [
    [
      '#dc143c',
      '#cd5c5c',
      '#f08080',
      '#e9967a',
      '#fa8072'
    ],
    [
      '#ffa500',
      '#ffae19',
      '#ffb732',
      '#ffc04c',
      '#ffc966'
    ],
    [
      '#cccc00',
      '#ffff00',
      '#ffff19',
      '#ffff66',
      '#ffffcc'
    ],
    [
      '#008000',
      '#198c19',
      '#329932',
      '#4ca64c',
      '#66b266'
    ],
    [
      '#1e90ff',
      '#00bfff',
      '#87cefa',
      '#e6e6fa',
      '#f0f8ff'
    ],
    [
      '#800080',
      '#8c198c',
      '#993299',
      '#a64ca6',
      '#b266b2'
    ],
    [
      '#a52a2a',
      '#ae3f3f',
      '#b75454',
      '#c06969',
      '#c97f7f'
    ],
    [
      '#808080',
      '#8c8c8c',
      '#999999',
      '#a6a6a6',
      '#b2b2b2',
    ]
  ];

  constructor(private _http: HttpClient) {}

  getColors() {
    return this._http.get(this.apiUrl)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(error => this.error = error) // then handle the error
      );
  }

  pickRandomColor() {
    const randNumber = Math.floor(Math.random() * 8);
    return this.randomColorsArr[randNumber];
  }

  getRandColorArr() {
    return this.randomColorsArr;
  }
}

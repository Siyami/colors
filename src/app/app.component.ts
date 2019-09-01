import { Component, OnInit } from '@angular/core';

import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  colorsData: any;
  displayArr: Array<object>;
  totalPageNumbers: number;
  pageArr = [];

  constructor(
    private _colorsService: HttpService
  ) {}

  ngOnInit() {
    this._colorsService.getColors().subscribe(res => {
      this.colorsData = res;

      this.totalPageNumbers = Math.ceil(this.colorsData.colors.length / 12);
      for (let i = 1; i < this.totalPageNumbers + 1; i++) {

        this.pageArr.push(i);
      }
      this.changePage(1);
      });
  }

  changePage(number) {
    this.displayArr = [];
    const end = number * 12;
    const start = end - 12;
    for (let i = start; i < end; i++) {
      if (!this.colorsData.colors[i]) break;
      this.displayArr.push(this.colorsData.colors[i]);
    }
  }
}

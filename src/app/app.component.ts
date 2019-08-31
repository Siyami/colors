import { Component, OnInit } from '@angular/core';

import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  colorsData: Object;

  constructor(
    private _colorsService: HttpService
  ) {}

  ngOnInit() {
    this._colorsService.getColors().subscribe(res => {
      this.colorsData = res;
    });
  }
}

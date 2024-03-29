import { Component, OnInit } from '@angular/core';

import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private _httpService: HttpService
  ) {}

  ngOnInit() {
  }

  pickRandColor() {
    const randomColorArr = this._httpService.pickRandomColor();
    sessionStorage.setItem('randomColorArr', JSON.stringify(randomColorArr));
  }

  saveColor(index) {
    const randColorArr = this._httpService.getRandColorArr()[index];
    sessionStorage.setItem('randColorArr', JSON.stringify(randColorArr));
  }
}

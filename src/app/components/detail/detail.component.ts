import { Component, OnInit, DoCheck } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements DoCheck {
  randomColors: Array<string>;

  constructor(
    private _httpService: HttpService
  ) { }

  ngDoCheck() {
    this.randomColors = JSON.parse(sessionStorage.getItem('randomColorArr'));
  }

}

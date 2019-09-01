import { Component, OnInit, DoCheck } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  randomColors: Array<string>;
  pickedColor: string;

  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.randomColors = JSON.parse(sessionStorage.getItem('randomColorArr'));
    this.pickedColor = this.randomColors[0];
  }

  switchColor(color) {
    this.pickedColor = color;
  }

  // ngDoCheck() {
  //   this.randomColors = JSON.parse(sessionStorage.getItem('randColorArr'));
  //   this.pickedColor = this.randomColors[0];
  // }

}

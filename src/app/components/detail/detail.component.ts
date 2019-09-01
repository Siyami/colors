import { Component, OnInit, DoCheck } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, DoCheck {
  randomColors: Array<string>;
  pickedColor: string;
  switch: boolean = false;

  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.randomColors = JSON.parse(sessionStorage.getItem('randColorArr'));
    this.pickedColor = this.randomColors[0];
  }

  switchColor(color) {
    this.pickedColor = color;
    this.switch = true;
  }

  ngDoCheck() {
    this.randomColors = JSON.parse(sessionStorage.getItem('randColorArr'));
    if(!this.switch) this.pickedColor = this.randomColors[0];
    else {
      this.pickedColor = this.pickedColor;
      this.switch = false;
    }
  }

}

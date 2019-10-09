import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  imageUrlArray = [
    '../../../assets/img/42.png',
    '../../../assets/img/24.jpg',
    '../../../assets/img/26.jpg',
    '../../../assets/img/28.jpg',
    '../../../assets/img/46.jpg'];
  constructor() { }

  ngOnInit() {
  }

}

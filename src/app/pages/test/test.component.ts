import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  imageUrlArray = [
    '../../../assets/img/IMG1.jpg',
    '../../../assets/img/IMG2.jpg',
    '../../../assets/img/IMG3.jpg'];
  constructor() { }

  ngOnInit() {
  }

}

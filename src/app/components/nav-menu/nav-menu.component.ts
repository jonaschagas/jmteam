import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showMenu() {
    if (window.innerWidth > 750) { return;}
    const menu = document.getElementById('main-nav-menu');
    menu.style.display = menu.style.display === 'none' ?   'block' : 'none';
  }

}

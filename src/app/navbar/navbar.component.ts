import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.addBackground();
  }

  addBackground(){
    const navbar = document.getElementById("navbar");

    function scrolled(){
      const currentScroll = document.body.scrollTop || document.documentElement.scrollTop;

      if(currentScroll > 0){
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }

    }
    addEventListener("scroll", scrolled, false);
  }

}

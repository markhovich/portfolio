import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  currentIndex: number;

  gitHubUrl: any[] = [
    {
      front: "https://github.com/markhovich/crazy-trip-v2",
      back: "https://github.com/markhovich/crazy-trip-api"
    },
    {
      front: "https://github.com/Eron63/spotify-angular",
      back: "https://github.com/Eron63/spotify"
    },
    {
      front: "https://github.com/markhovich/crazy-pic",
      back: "https://github.com/markhovich/picture-contest-api"
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickDisplay(index: number){
    this.currentIndex = index;

    const block = document.getElementsByClassName('project-details')[index];
    const curtain = document.getElementById('page');

    if(!block.classList.contains('displayed')){
      block.classList.add('displayed');
      curtain.classList.add('curtain');
    }
  }

  removeCurtain(){
    document.getElementsByClassName('project-details')[this.currentIndex].classList.remove('displayed');
    document.getElementById('page').classList.remove('curtain');
  }

}

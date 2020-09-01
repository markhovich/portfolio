import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  currentIndex: number;

  constructor() { }

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

import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-card',
  templateUrl: './timeline-card.component.html',
  styleUrls: ['./timeline-card.component.scss']
})
export class TimelineCardComponent implements OnInit, OnChanges {

  @Input() exp: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    console.log(this.exp);
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-technos',
  templateUrl: './technos.component.html',
  styleUrls: ['./technos.component.scss']
})
export class TechnosComponent implements OnInit {

  @Input() frontUrl: string;
  @Input() backUrl: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.frontUrl)
  }

}

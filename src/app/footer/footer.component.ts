import { Component, OnInit } from '@angular/core';
declare const sharingFB: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sharingFB(){
    const description = document.querySelectorAll('[property="og:description"]')[0];
    description.setAttribute('content', 'test');
    console.log(description);

    setTimeout(() => {
      new sharingFB();
    }, 1000);
  }

}

import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  //1 for day theme, 0 for night theme
  theme: boolean = true;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('fr');
  }

  ngOnInit(): void {
    this.addBackground();
  }

  addBackground(){
    const navbar = document.getElementById("navbar-background");

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

  toggleBackground(){
    document.getElementsByTagName('body')[0].classList.toggle('night-background');

    const polygonList = document.getElementsByTagName('polygon');

    for(let i=0; i<polygonList.length; i++){
      if(this.theme){
        polygonList[i].setAttribute('fill', '#222121');
      } else {
        polygonList[i].setAttribute('fill', 'white');
      }
    }
    this.theme = !this.theme;
  }

  useLanguage(): void {
    this.translate.currentLang === 'fr' ? this.translate.use('en'): this.translate.use('fr');
}

}

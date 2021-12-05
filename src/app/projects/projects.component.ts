import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  currentLang: string;
  currentIndex: number;

  projects = [
    {
      name: 'SeveUp App',
      badge: 'réalisé en équipe pro',
      url: 'https://app.seve-up.com',
      gitHubUrl: 'Private',
      'descriptionFr': 'Plateforme SAAS permettant d\'exploiter les données BIM par la data visualisation',
      'descriptionEn': 'SAAS plateform that makes it possible to use BIM data through data visualization',
      online: true,
      image: './assets/projects/seveup-screen.jpg',
      items: [
        {description: 'a', image: './assets/seve-up/1.png'},
        {description: 'b', image: './assets/seve-up/1.png'},
        {description: 'c', image: './assets/seve-up/1.png'},
        {description: 'd', image: './assets/seve-up/1.png'}
      ]
    },
    {
      name: 'Crazy Trip',
      badge: 'réalisé en solo',
      url: 'crazy-trip.xyz',
      gitHubUrl: 'Private',
      'descriptionFr': 'L\'admnistrateur gère les articles et les ' +
      'utilisateurs peuvent commenter les articles après authentification.',
      'descriptionEn' : 'The admin manage the articles and users can comment them after authentication',
      online: false,
      image: './assets/projects/blog/crazytrip.jpg',
      items: [
        {description: 'a', image: './assets/projects/blog/crazytrip.jpg'},
        {description: 'b', image: './assets/projects/blog/crazytrip.jpg'},
        {description: 'c', image: './assets/projects/blog/crazytrip.jpg'},
        {description: 'd', image: './assets/projects/blog/crazytrip.jpg'}
      ]
    },
    {
      name: 'Spotify Clone',
      badge: 'réalisé en équipe',
      url: 'app.seve-up.com',
      gitHubUrl: 'Private',
      'descriptionFr': 'Lecteur de musique intégrant ' +
      'un gestionnaire de playlist ' +
      'réalisé en collaboration avec Kevin MONAC',
      'descriptionEn': 'Music player with playlist manager realised with Kevin MONAC',
      online: false,
      image: './assets/projects/spotify/spotify.jpg',
      items: [
        {description: 'a', image: './assets/projects/spotify/spotify.jpg'},
        {description: 'b', image: './assets/projects/spotify/spotify.jpg'},
        {description: 'c', image: './assets/projects/spotify/spotify.jpg'},
        {description: 'd', image: './assets/projects/spotify/spotify.jpg'}
      ]
    },
    {
      name: 'Picture contest',
      badge: 'réalisé en solo',
      url: 'app.seve-up.com',
      gitHubUrl: 'Private',
      'descriptionFr': 'L\'utilisateur peut créer un concours, soumettre les photos' +
      ' et partager le lien pour que les personnes votent',
      'descriptionEn': 'The user creates a contest, uploads the pictures and share the url to make people vote',
      online: false,
      image: './assets/projects/contest/crazypic.jpg',
      items: [
        {description: 'a', image: './assets/projects/contest/crazypic.jpg'},
        {description: 'b', image: './assets/projects/contest/crazypic.jpg'},
        {description: 'c', image: './assets/projects/contest/crazypic.jpg'},
        {description: 'd', image: './assets/projects/contest/crazypic.jpg'}
      ]
    }
  ];

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

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.currentLang = this.translate.currentLang;
    this.translate.onLangChange.subscribe(() => this.currentLang = this.translate.currentLang);
  }

  onClickDisplay(index: number): void {
    this.currentIndex = index;

    const block = document.getElementsByClassName('project-details')[index];
    const curtain = document.getElementById('page');

    if (!block.classList.contains('displayed')) {
      block.classList.add('displayed');
      curtain.classList.add('curtain');
    }
  }

  removeCurtain(): void {
    document.getElementsByClassName('project-details')[this.currentIndex].classList.remove('displayed');
    document.getElementById('page').classList.remove('curtain');
  }
}

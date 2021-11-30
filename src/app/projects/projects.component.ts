import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  currentIndex: number;
  projects = [
    {
      name: 'SeveUp App',
      badge: 'réalisé en équipe pro',
      url: 'https://app.seve-up.com',
      gitHubUrl: 'Private',
      description: 'Plateforme SAAS permettant d\'exploiter les données BIM par la data visualisation',
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
      name: 'Blog Voyage',
      badge: 'réalisé en solo',
      url: 'crazy-trip.xyz',
      gitHubUrl: 'Private',
      description: 'L\'admnistrateur gère les articles et les ' +
      'utilisateurs peuvent commenter les articles après authentification.',
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
      description: 'Lecteur de musique intégrant ' +
      'un gestionnaire de playlist ' +
      'réalisé en collaboration avec Kevin MONAC',
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
      name: 'Concours Photo',
      badge: 'réalisé en solo',
      url: 'app.seve-up.com',
      gitHubUrl: 'Private',
      description: 'L\'utilisateur peut créer un concours, soumettre les photos' +
      ' et partager le lien pour que les personnes votent',
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

  constructor() { }

  ngOnInit(): void {
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

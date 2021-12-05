import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  currentLang: string;
  experiences = [];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
   this.updateLang();
   this.translate.onLangChange.subscribe(
      () => this.updateLang());
  }

  private updateLang(): void{
    this.currentLang = this.translate.currentLang;
    this.currentLang === 'fr' ? this.experiences = this.experiencesFr : this.experiences = this.experiencesEn;
  }

  experiencesFr = [
    {
      title: 'Développeur Fullstack',
      date: '2021',
      subtitle: 'SeveUp - StartUp dans la BIM DataViz',
      description: [
        'Au sein d’une équipe de 3 dev avec GitLab',
        'Conception et développement de SeveUp App',
        'SeveUp App : Plateforme SAAS permettant d’exploiter les données BIM par la data visualisation',
        'Implémentation de nouvelles fonctionnalités sous Angular/Spring',
      ]
    },
    {
      title: 'Développeur Freelance',
      date: '2020',
      subtitle: 'Plateformes en ligne (malt, upwork, codeur...)',
      description: [
        'Création de sites Internet (Wordpress)',
        'Développement front-end (Angular)',
        'Développement back-end (Spring/Hibernate)'
      ]
    },
    {
      title: 'Formation Développeur Java (3 mois)',
      date: '2020',
      subtitle: 'Hiit School à Lyon',
      description: [
        'Perfectionnement langage Java, Spring Boot, Maven',
        'Création de microservices REST',
        'Clean code, bonnes pratiques'
      ]
    },
    {
      title: 'POEC Développeur Java Full Stack (3 mois)',
      date: '2020',
      subtitle: 'M2I Formations à Clermont-Ferrand',
      description: [
        'Comprendre les concepts objets de la programmation',
        'Utiliser Angular pour construire une application web',
        'Implémenter Spring et Hibernate pour construire une API REST'
      ]
    },
    {
      title: 'Vendeur magasin de fromage',
      date: '2019',
      subtitle: 'Société Laitière de Laqueuille',
      description: [
        'Service, encaissement client',
        'Conseil clientèle, respect des règles d’hygiène',
        'Logistique, organisation des zones de stockage'
      ]
    },
    {
      title: 'Voyage au Mexique',
      date: '2019',
      subtitle: 'En Jalisco, Oaxaca et Chiapas sur 3 mois',
      description: [
        'Road trip à travers le pays',
        'Volontariat dans une permaculture dans le Jalisco',
        'Volontariat réception/bar dans une auberge de jeunesse en Oaxaca'
       ]
    },
    {
      title: 'Agent fromager',
      date: '2018',
      subtitle: 'Société Laitière de Laqueuille',
      description: [
        'Moulage, salage et démoulage des fromages',
        'Specialité : bleu de Laqueuille'
      ]
    }
  ];

  experiencesEn = [
    {
      title: 'Fullstack developer ',
      date: '2021',
      subtitle: 'SeveUp - StartUp in BIM DataViz',
      description: [
        'In a 3 dev team using GitLab',
        'Design and development of SeveUp App',
        'SeveUp App : SAAS plateform which makes it easy to use BIM data through data visualisation',
        'Implementation of new features with Angular/Spring',
      ]
    },
    {
      title: 'Freelance developer',
      date: '2020',
      subtitle: 'via online plateforms (malt, upwork, codeur...)',
      description: [
        'Website Creation (Wordpress)',
        'Frontend development (Angular)',
        'Backend development (Spring/Hibernate)'
      ]
    },
    {
      title: 'Java developer bootcamp (3 months)',
      date: '2020',
      subtitle: 'Hiit School in Lyon',
      description: [
        'Improvement Java, Spring Boot, Maven',
        'Creation of REST microservices',
        'Clean code, good practices'
      ]
    },
    {
      title: 'POEC FullStack Java developer (3 months)',
      date: '2020',
      subtitle: 'M2I Formations in Clermont-Ferrand',
      description: [
        'Understand OOP concepts in programming',
        'Use Angular to build a web app',
        'Implement Spring and Hibernate to build a REST API'
      ]
    },
    {
      title: 'Seller in cheese shop',
      date: '2019',
      subtitle: 'Société Laitière de Laqueuille',
      description: [
        'Service, cash-in client',
        'Advices to clients, respect hygiene rules',
        'Logistic, management of storage areas'
      ]
    },
    {
      title: 'Travel in Mexico',
      date: '2019',
      subtitle: 'In Jalisco, Oaxaca and Chiapas during 3 months',
      description: [
        'Road trip through the country',
        'Volunteering in a permaculture farm in Jalisco',
        'Volunteering at bar/reception in  a guest house in Oaxaca'
       ]
    },
    {
      title: 'Cheese maker agent',
      date: '2018',
      subtitle: 'Société Laitière de Laqueuille',
      description: [
        'Moulding, salting and demoulding cheeses',
        'Speciality : blue cheese'
      ]
    }
  ];

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  experiences = [
    {
      title: 'Développeur Fullstack',
      date: '2021',
      subtitle: 'SeveUp - StartUp dans la BIM DataViz',
      description: [
        'Au sein d’une équipe de 3 dev avec GitLab',
        'Conception et développement de SeveUp App',
        'SeveUp App : Plateforme SAAS permettant d’exploiter les données BIM par la data visualisation',
        'Implémentation de nouvelles fonctionnalités sous Angular/Spring',
        'Développement back-end (Spring/Hibernate)'
      ]
    },
    {
      title: 'Développeur Freelance',
      date: '2020',
      subtitle: 'Plateformes en ligne (malt, upwork, codeur...)',
      description: [
        'Création de sites Internet',
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
        'Moulage, salage et démoulage des fromages'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

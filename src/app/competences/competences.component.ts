import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompetencesComponent implements OnInit {

  competences = [
      {
        name: 'Back-end',
        items: [
          {name: 'Java', icon: './assets/icons/java.svg'},
          {name: 'Spring Boot', icon: './assets/icons/spring-boot.svg'},
          {name: 'Hibernate/JPA', icon: './assets/icons/hibernate.svg'},
          {name: 'Liquibase/PostgreSQL', icon: './assets/icons/mysql.svg'},
          {name: 'Microservices REST', icon: './assets/icons/rest.png'}
        ]
      },
      {
        name: 'Front-end',
        items: [
          {name: 'HTML/CSS', icon: './assets/icons/html.png'},
          {name: 'JavaScript', icon: './assets/icons/js.png'},
          {name: 'Angular', icon: './assets/icons/angular.png'},
          {name: 'Bootstrap', icon: './assets/icons/bootstrap.svg'},
          {name: 'Material', icon: './assets/icons/angular-material.svg'}
        ]
      },
      {
        name: 'DevOps',
        items: [
          {name: 'Git (GitLab)', icon: './assets/icons/git.png'},
          {name: 'Gradle/Maven', icon: './assets/icons/gradle.svg'},
          {name: 'Power BI', icon: './assets/icons/power-bi.png'}
        ]
      }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}

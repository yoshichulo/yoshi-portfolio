import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  public icons: string[] = [
    'devicon-github-plain-wordmark', 'devicon-csharp-plain', 'devicon-dot-net-plain-wordmark',
    'devicon-gitlab-plain-wordmark', 'devicon-html5-plain-wordmark', 'devicon-ionic-original-wordmark',
    'devicon-java-plain', 'devicon-jetbrains-plain', 'devicon-linux-plain',
    'devicon-mysql-plain', 'devicon-nodejs-plain', 'devicon-photoshop-plain',
    'devicon-postgresql-plain-wordmark', 'devicon-angularjs-plain', 'devicon-python-plain',
    'devicon-trello-plain-wordmark', 'devicon-vuejs-plain-wordmark'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

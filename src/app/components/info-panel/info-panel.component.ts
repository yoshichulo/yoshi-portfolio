import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss']
})
export class InfoPanelComponent implements OnInit {

  public studies = [
    {
      icon: 'school',
      title: 'Ingeniería Informática - Escuela Superior de Informática (Ciudad Real)',
      subtitle: '2017 ~ 2020',
      description: 'Cursados los tres primeros años de Ingeniería Informática en la E.S.I de Ciudad Real, con especialización en computación'
    },
    {
      icon: 'architecture',
      title: 'Bachillerato de Ciencias Tecnológicas - IES Miguel de Cervantes Saavedra',
      subtitle: '2015 ~ 2017',
      description: 'Cursado el Bachillerato de Ciencias Tecnológicas en el Instituto Miguel de Cervantes Saavedra de Alcázar de San Juan.'
    }
  ];

  public experiences = [
    {
      icon: 'computer',
      title: 'Full-stack Developer & Software Developer - NosWings',
      subtitle: '04/2020 ~ Actualidad',
      description: 'NosWings es un proyecto de servidor privado para el MMORPG NosTale, llevado a cabo por unos pocos estudiantes de IT apasionados por el mismo.\n' +
        'Desarrollador full-stack en la página web, utilizando VueJS y NuxtJS junto a Vuetify para el frontend, y .NET Core para el backend.\n' +
        'Dentro del emulador, me encargo de la implementación de nuevas funcionalidades, automatización de operaciones, optimización de código, revisión de bugs y mantenimiento del código y de la base de datos.\n' +
        'Aquí trabajo principalmente con C# (.NET Core), Docker, PostgreSQL, YAML y Python.'
    },
    {
      icon: 'build',
      title: 'Becario en el Servicio TIC - Biblioteca UCLM (Ciudad Real)',
      subtitle: '2019 ~ 2020',
      description: 'Becario en el servicio de TIC de la Bilioteca de la UCLM de Ciudad Real. Entre las tareas realizadas, figuran algunas como: análisis y reparación de equipos informáticos, montaje y sustitución de componentes, instalación de Software y Sistemas Operativos o dar soporte técnico a los estudiantes, profresorado y demás miembros de la UCLM.\n'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

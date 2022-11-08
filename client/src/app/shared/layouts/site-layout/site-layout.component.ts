import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent implements OnInit {
  items: MenuItem[] = []

  constructor() { }

  ngOnInit(): void {

    this.items = [
      {icon : 'pi pi-home', routerLink: ['']},
      {label: 'Вход', routerLink: ['/login']},
      {label: 'Регистрация', routerLink: ['/register']},

    ]
  }



}

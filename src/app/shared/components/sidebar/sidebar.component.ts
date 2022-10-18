import { Component, OnInit, ViewChild } from '@angular/core';
import { MainRouting } from '../../models/main-routing';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  mains: MainRouting[] = [
    { name: "dashboard", path: "/full/home", title: "dashboard", icon: "bi bi-grid"},
    { name: "servicios", path: "/full/services", title: "servicios", icon: "bi bi-layout-text-window-reverse"},
    { name: "productos", path: "/full/profile", title: "productos", icon: "ri-list-settings-line"},
    { name: "tecnicos", path: "/full/profile", title: "tecnicos", icon: "ri-user-follow-line"},
    { name: "consolidados", path: "/full/profile", title: "consolidados", icon: "bi bi-bar-chart"},
    { name: "ordenes-trabajo", path: "/full/profile", title: "ordenes de trabajo", icon: "bi bi-file-earmark-text"},
    { name: "hoja-vida", path: "/full/profile", title: "hoja de vida", icon: "bi bi-file-earmark-medical"},
    { name: "users", path: "/full/profile", title: "users", icon: "bx bxs-user-detail"},
    { name: "profile", path: "/full/profile", title: "Profile", icon: "bx bxs-user"},
    { name: "contact", path: "/full/contact", title: "Contact", icon: "bx bx-help-circle"}
  ];

  constructor() { }

  ngOnInit(): void {
  }



}

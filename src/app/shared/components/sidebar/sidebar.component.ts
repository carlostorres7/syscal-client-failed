import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/services/mains/main-service.service';
import { MainRouting } from '../../models/main-routing';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  mains?: MainRouting[];

  constructor( private mainServiceService: MainServiceService) { }
  

  ngOnInit(): void {
    this.mainServiceService.getAll().subscribe( value => this.mains = value )
  }

}

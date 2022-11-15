import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MainServiceService } from 'src/app/services/mains/main-service.service';
import { MainRouting } from '../../models/main-routing';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  mains?: MainRouting[];

  constructor( private authService: AuthService) { }
  

  ngOnInit(): void {
    this.mains = this.authService.getMains();
    console.log(this.mains)
  }

}

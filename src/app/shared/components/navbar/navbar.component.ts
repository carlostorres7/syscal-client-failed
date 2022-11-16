import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AuthServiceResponse } from 'src/app/models/auth/auth-interface';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  userInfo?: AuthServiceResponse;

  constructor( 
    private authService: AuthService
) { }

  ngOnInit(): void {
    this.userInfo = this.authService.getUserInfo();
  }


}

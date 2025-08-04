import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  isLoginPage = false;

  constructor(
    private router: Router,
    public authService: AuthService,
    public Data: DataService
  ) 
  
  {
    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = this.router.url === '/login';
      }
    });
  }

}

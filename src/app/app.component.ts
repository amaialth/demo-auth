import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-auth';
  constructor(private authService:AuthService){}
  loginWithGoogle(){
    this.authService.loginWithGoogle();
  }
  loginWithGithub(){
    this.authService.loginWithGithub();
  }
}

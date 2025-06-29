import { Component } from '@angular/core';
import { Profile } from './profile.model';
import { Router } from '@angular/router';
import { AuthgoogleService } from '../authgoogle.service';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {
  profile: Profile | undefined;

  constructor(
    private router: Router,
    private loginService: AuthgoogleService
  ){}

  navegar(){
    this.router.navigate(['/paginas/galeria']);
  }

  logarComGooggle() {
    this.loginService.login();
  }

  isLoggeedIn(): boolean {
    this.profile = this.loginService.getLoggedProfile();
    return !!this.profile;
  }
}

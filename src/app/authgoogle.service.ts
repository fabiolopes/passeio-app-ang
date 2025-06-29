import { Injectable, inject, signal } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';
import { auth } from './auth.config';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthgoogleService {
  private authService = inject(OAuthService);
  private router = inject(Router);
  profile = signal<any>(null);

  constructor() { 
    this.initConfiguration();
  }

  initConfiguration() {
    this.authService.configure(auth);
    this.authService.setupAutomaticSilentRefresh();
    this.authService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (this.authService.hasValidAccessToken()) {
          this.profile.set(this.authService.getIdentityClaims());
      }
    });
  }

  login() {
    this.authService.initImplicitFlow();
  }

  logout() {
    this.authService.revokeTokenAndLogout();
    this.authService.logOut();
    this.profile.set(null);
    this.router.navigate(['/']);
  }

  getLoggedProfile() {
    return this.profile();
  }
}

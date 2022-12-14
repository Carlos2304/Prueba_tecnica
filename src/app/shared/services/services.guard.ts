import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesGuard implements CanActivate {
  constructor(private AuthService: AuthService, private router: Router) { }

  canActivate():boolean{
    if(this.AuthService.loggedIn())
    { 
      return true
    };
    this.router.navigate(['/signIn']);
    return false;
  }
  
}

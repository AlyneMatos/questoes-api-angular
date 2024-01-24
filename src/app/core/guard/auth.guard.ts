import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class authGuard{

  // constructor(private authService: AuthService, private router: Router) {}

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): boolean {
  //   const isAuthenticated = this.authService.isAuthenticated();

  //   // if(state.url !== '/signin'){
  //     if (isAuthenticated) {
  //       return true; // Permite a navegação
  //     } else {
  //       // Redireciona para a página de login
  //       this.router.navigate(['/signin']);
  //       return false;
  //     }
  //   //   this.router.navigate(['/signin']);
  //   //   return false;
  //   // }
  // }

}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import { Observable, map, take, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  afAuth: any;
  constructor(private authService: AuthServiceService, private router: Router) {
    this.afAuth.authState.subscribe((_user: any) => { });
  }

  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot): Observable<boolean> | UrlTree | Promise<boolean> | UrlTree | boolean {

    return this.authService.getLoggedInUser().pipe(
      take(1),
      map(authState => Boolean(authState)),
      tap(auth => !auth ? this.router.navigate(['admin/login']) : true)
    );
  }
}
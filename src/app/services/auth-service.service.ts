import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  afAuth: any;
  userEmail: any;
  router: any;

  constructor() {
    this.afAuth.authState.subscribe((_user: any) => { });
  }


  getLoggedInUser(): any {
    return this.afAuth.authState;
  }

  checkLoggedInUser() {
    return this.userEmail;
  }

  login(_email: string, _password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword()
    this.userEmail.next(_email);
    this.router.navigate(['admin/main']);
  }

  logout() {
    return this.afAuth.auth.signOut()
    this.userEmail.next("");
    this.router.navigate(['calculator']);
  }

}



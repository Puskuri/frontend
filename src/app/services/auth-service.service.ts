import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  afAuth: any;
  userEmail: any;
  router: any;


  getLoggedInUser(): any {
    return this.afAuth.authState;
  }

  checkLoggedInUser() {
    return this.userEmail;
  }

  login(_email: string, _password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword()
  }

  logout() {
    return this.afAuth.auth.signOut()
  }

}



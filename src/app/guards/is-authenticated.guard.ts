import { Injectable } from '@angular/core';

@Injectable()
export class IsAuthenticatedGuard {
  // simple guard checking if user is authenticated

  constructor() { }

  public isAuthenticated(): boolean {
    if (localStorage.getItem('currentUser')) {
    // logged in so return true
    return true;
  } else{
      return false;
    }
  }
}

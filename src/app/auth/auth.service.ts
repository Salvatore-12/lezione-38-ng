import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Apikey ='AIzaSyDzAn5R8F-bn_uZ_Bl9rqMMHJwS9jLe894'
  signUpURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.Apikey}`
  signInURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.Apikey}`
  isLoggedIn = true

  constructor(private http: HttpClient) { }

  signUp(email: string, password: string){
    return this.http.post(this.signUpURL, {email: email, password: password, returnSecureToken: true})
  }
  
  signIn(email: string, password: string){
    return this.http.post(this.signInURL,{email: email, password: password, returnSecureToken: true})
  }


}

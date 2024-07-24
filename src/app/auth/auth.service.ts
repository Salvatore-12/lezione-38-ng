import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modelli/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Apikey ='AIzaSyDzAn5R8F-bn_uZ_Bl9rqMMHJwS9jLe894'
  signUpURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.Apikey}`
  signInURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.Apikey}`
  isLoggedIn = true
  user: User | null= null

  constructor(private http: HttpClient, private router: Router,private authService: AuthService) { }

  createUser(email:string, id: string, token: string, expirationDate: Date){
    this.user = new User(email,id,token,expirationDate)
  }

  signUp(email: string, password: string){
    return this.http.post(this.signUpURL, {email: email, password: password, returnSecureToken: true})
  }
  
  signIn(email: string, password: string){
    return this.http.post(this.signInURL,{email: email, password: password, returnSecureToken: true})
  }

  clearUser() {
    this.user = null;
  }

  
  logout(){
    this.isLoggedIn = false
    this.user = null
    localStorage.removeItem('user')
    this.authService.clearUser();
    this.router.navigate(['/login'])
  }

}

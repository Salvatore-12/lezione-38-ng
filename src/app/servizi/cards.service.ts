import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http:HttpClient) { }

  getCardsCani(){
    return this.http.get("http://localhost:3001/cards/cards-cane");
  }

  getCardsGatti(){
    return this.http.get("http://localhost:3001/cards/cards-gatto")
  }

  getCardsUccelli(){
    return this.http.get("http://localhost:3001/cards/cards-uccello")
  }
}

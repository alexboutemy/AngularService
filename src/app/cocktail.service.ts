import { Injectable } from '@angular/core';
import { Cocktail } from './models/Cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  cocktails: Cocktail[] = [
    new Cocktail(
      'Mojito',
      7.0,
      'https://st4.depositphotos.com/1194063/20517/i/1600/depositphotos_205174990-stock-photo-mojito-cocktail-with-fresh-lime.jpg'
    ),
    new Cocktail(
      'Pina Colada',
      10.0,
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Pina_Colada_with_garnish.JPG/255px-Pina_Colada_with_garnish.JPG'
    ),
  ];
  constructor() {}

  getCocktails() {
    return this.cocktails;
  }
}

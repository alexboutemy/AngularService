import { Component } from '@angular/core';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent {
  constructor(public CocktailService: CocktailService) {}

  cocktails = this.CocktailService.getCocktails();
}

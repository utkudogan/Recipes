import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'u1',
      title: 'mantı',
      imageUrl: 'https://cdn.yemek.com/mncrop/940/625/uploads/2020/08/manti-tarifi-guncelleme-son.jpg',
      ingredients: ['un', 'et']
    },
    {
      id: 'u2',
      title: 'şakşuka',
      imageUrl: 'https://im.haberturk.com/2020/05/15/ver1589520880/2679938_810x458.jpg',
      ingredients: ['patlıcan', 'biber', 'domates']
    }
  ];
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeid:string) {
    return{
      ...this.recipes.find(recipe => {
        return recipe.id === recipeid;
      })
    }
  };
}

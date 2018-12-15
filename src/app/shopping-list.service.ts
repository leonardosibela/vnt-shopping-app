import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  public listItems: any[] = [];

  constructor() {
    this.listItems = [
      { name: "Pão", amount: 1, checked: false },
      { name: "Abacaxi", amount: 8, checked: true },
      { name: "Laranja", amount: 999, checked: false },
    ];
  }

}
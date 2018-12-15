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
  
  add(item: any): void {
    this.listItems.push(item);
  }

  remove(itemName): void {
    const index = this.listItems.findIndex(item => item.name === itemName);
    this.listItems.splice(index, 1);
  }

  check(itemName) {
    let item = this.listItems.find(item => item.name === itemName);
    item.checked = true;
    item.amount = 0;
  }

}
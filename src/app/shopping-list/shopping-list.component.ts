import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public listItems: any[] = [];

  constructor() {
    this.listItems = [
      { name: "Pão", amount: 1, checked: false },
      { name: "Abacaxi", amount: 8, checked: true },
      { name: "Laranja", amount: 999, checked: false },
    ];
  }

  ngOnInit() {
  }

}

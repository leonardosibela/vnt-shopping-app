import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public listItems = [];

  constructor(private shoppingListService: ShoppingListService) {
    this.listItems = shoppingListService.listItems;
  }

  ngOnInit() {
  }

}

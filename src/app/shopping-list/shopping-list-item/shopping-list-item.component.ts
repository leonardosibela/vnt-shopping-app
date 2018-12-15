import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list.service';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {

  @Input() shoppingItem: any = {};

  constructor(private service: ShoppingListService) { }

  ngOnInit() {
  }

  removeItem() {
    this.service.remove(this.shoppingItem.name);
  }

}

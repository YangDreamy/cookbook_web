import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent {
  recipes = [
    {
      id: 1,
      name: 'dish1',
      price: 799,
      description: 'A large phone with one of the best screens'
    },
    {
      id: 2,
      name: 'dish2',
      price: 699,
      description: 'A great phone with one of the best cameras'
    },
    {
      id: 3,
      name: 'dish3',
      price: 299,
      description: ''
    }
  ];

  favourite() {
    window.alert('The product has been added to favorite!');
  }

  delete() {
    window.alert('The product has been deleted!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }


}

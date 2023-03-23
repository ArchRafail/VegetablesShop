import { Component } from '@angular/core';
import {Product} from "../../api/models/Product";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  products: Product[] = [];

  constructor() {
    this.products = [{name: "Green bean", price: 12.54, image: "https://images.pexels.com/photos/3004798/pexels-photo-3004798.jpeg", amount: 6},
      {name: "Pumpkin", price: 21.22, image: "https://images.pexels.com/photos/9541083/pexels-photo-9541083.jpeg", amount: 8},
      {name: "Cucumber", price: 17.48, image: "https://images.pexels.com/photos/3568039/pexels-photo-3568039.jpeg", amount: 3},
      {name: "Turnip", price: 11.87, image: "https://images.pexels.com/photos/13133610/pexels-photo-13133610.jpeg", amount: 10},
      {name: "Tomato", price: 19.90, image: "https://images.pexels.com/photos/4247701/pexels-photo-4247701.jpeg", amount:5},
      {name: "Lettuce", price: 16.63, image: "https://images.pexels.com/photos/11287048/pexels-photo-11287048.jpeg", amount:9},
      {name: "Cauliflower", price: 15.50, image: "https://images.pexels.com/photos/11663123/pexels-photo-11663123.jpeg", amount:7},
      {name: "Broccoli", price: 17.16, image: "https://images.pexels.com/photos/13133609/pexels-photo-13133609.jpeg", amount:4},
      {name: "Garlic", price: 12.30, image: "https://images.pexels.com/photos/6638901/pexels-photo-6638901.jpeg", amount:2},
    ]
  }
}

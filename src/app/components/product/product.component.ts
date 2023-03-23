import {Component, Input} from '@angular/core';
import {Product} from "../../api/models/Product";
import {faSackDollar} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input()
  product?: Product;
  sack = faSackDollar;

  onBuyClick() {
    if (this.product)
      this.product.amount = this.product.amount - 1;
  }

}

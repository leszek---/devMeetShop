import { Component, Input } from '@angular/core';
import {Product} from '../../models/productModel';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    @Input() products: Product[];
}

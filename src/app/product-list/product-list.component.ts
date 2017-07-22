import { Component, OnInit } from '@angular/core';
import {products} from '../../data/products';
import {Product} from '../../models/productModel';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: Product[];
  constructor() { }

  ngOnInit() {
    this.products = products;
  }

}

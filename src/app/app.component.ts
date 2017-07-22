import { Component } from '@angular/core';
import {Product} from '../models/productModel';
import {products} from '../data/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: ['.nSize:{width: 300px; height; 300px;}']
})
export class AppComponent {
  public allProducts = products;
  public filteredProducts: Product[];

  resolveProducts = (filteredProducts: Product[]) => {
    this.filteredProducts = filteredProducts;
  }
}

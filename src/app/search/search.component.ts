import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Product} from '../../models/productModel';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  @Input() products: Product[];
  @Output() public filteredProducts = new EventEmitter();

  public searchInput = new FormControl();

  constructor() {
    this.searchInput.valueChanges.subscribe(value => this.filter(value));
  }

  ngOnInit() {
    this.filteredProducts.next(this.products);
  }

  filter = (searchText: string) => {
    const searchTextLowered = searchText.toLowerCase();
    const result = this.products.filter(product =>
      this.filterProduct(product.name, searchTextLowered) ||
      this.filterProduct(product.price, searchTextLowered) ||
      this.filterProduct(product.description, searchTextLowered)
     );
    this.filteredProducts.next(result);
  }

  filterProduct = (property: any , searchText: string ) => {
      const formattedProperty = typeof property === 'number' ? property.toString() : property;
      return formattedProperty.toLowerCase().includes(searchText);
  }
}

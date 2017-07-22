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
    const result = this.products.filter(product => product.name.toLowerCase().includes(searchTextLowered));
    this.filteredProducts.next(result);
  }
}

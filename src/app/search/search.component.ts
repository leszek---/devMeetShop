import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Product} from '../../models/productModel';
import { ProductService } from "../product/product-service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  @Output() public filteredProducts = new EventEmitter();

  public searchInput = new FormControl();
  
  constructor(private productService: ProductService) {
    this.searchInput.valueChanges.subscribe(value => this.filteredProducts.next(productService.filterProducts(value)));
  }

  ngOnInit() {
    this.filteredProducts.next(this.productService.getProducts());
    
  }

  
}

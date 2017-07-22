import { Component, Input } from '@angular/core';
import {Product} from '../../models/productModel';
import {Filter} from '../../models/filterModel';
import { ProductService } from "../product/product-service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[];
  //private productService: ProductService;
  constructor(private productService: ProductService){
    //this.productService = productService;
  }

  public filters: Array<Filter> = [
    {id: 1, nameValue: "price", name: "Price", value: true},
    {id: 2, nameValue: "name", name: "Name", value: false},
    {id: 3, nameValue: "isPromoted", name: "Promoted", value: false}
  ];

  public onClick (filterToChange) {
    this.filters.forEach(filter => { 
      if(filter.id == filterToChange.id){
        filter.value = true;
        this.productService.sortProducts(filter);
      }else{
        filter.value = false;
      }
    });
      
  }

  
}

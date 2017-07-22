import { Component, Input } from '@angular/core';
import {Product} from '../../models/productModel';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[];
  
  public filters: Array<{id:number, name:string, value:boolean}> = [
    {id: 1, name: "Price", value: true},
    {id: 2, name: "Name", value: false},
    {id: 3, name: "Promoted", value: false}
  ];

  public onClick (filterToChange) {
    this.filters.forEach(filter => { 
      if(filter.id == filterToChange.id){
        filter.value = true;
      }else{
        filter.value = false;
      }
    });  
  }

  
}

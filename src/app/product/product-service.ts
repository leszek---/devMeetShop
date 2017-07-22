
import { Injectable } from "@angular/core";
import {Product} from '../../models/productModel';
import {products} from '../../data/products';

@Injectable()
export class ProductService{

   getProducts = () => {
        return products;
   }
    filterProducts = (searchText: string) => {
        const searchTextLowered = searchText.toLowerCase();
        const result = products.filter(product =>
        this.filterProperty(product.name, searchTextLowered) ||
        this.filterProperty(product.price, searchTextLowered) ||
        this.filterProperty(product.description, searchTextLowered)
        );
        return result;
    }

    private filterProperty = (property: any , searchText: string ) => {
        const formattedProperty = typeof property === 'number' ? property.toString() : property;
        return formattedProperty.toLowerCase().includes(searchText);
    }

}
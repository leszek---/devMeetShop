
import { Injectable } from "@angular/core";
import {Product} from '../../models/productModel';
import {products} from '../../data/products';
import {Filter} from '../../models/filterModel';

@Injectable()
export class ProductService{
    static currentList: Product[];

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
        ProductService.currentList = result;
        return result;
    }

    sortProducts = (filter: Filter) => {
        ProductService.currentList.sort(product => product[filter.nameValue]);
    }

    private filterProperty = (property: any , searchText: string ) => {
        const formattedProperty = typeof property === 'number' ? property.toString() : property;
        return formattedProperty.toLowerCase().includes(searchText);
    }

}
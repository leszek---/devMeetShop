import { Component } from '@angular/core';
import {Product} from '../models/productModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public products: Product[] = [
    {id: 1, name: 'Hammer', isPromoted: false},
    {id: 2, name: 'Drill', description: 'Just a drill', isPromoted: false},
    {id: 3, name: 'Screwdriver', description: 'Gimme screw', isPromoted: false},
  ];
}

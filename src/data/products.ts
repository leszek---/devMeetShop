import {Product} from '../models/productModel';

export const products: Product[] = [
    {id: 1, name: 'Hammer', price: 10, isPromoted: false,
    photoUrl: 'https://www.montessoriservices.com/media/catalog/product/cache/1/thumbnail/550x/9df78eab33525d08d6e5fb8d27136e95/v/5/v508_hammer.jpg',
    description: "Hard attack"},
    {id: 2, name: 'Drill', price: 1, description: 'Just a drill', isPromoted: true,
    photoUrl: 'http://s7g3.scene7.com/is/image//ae235?src=ae235/2710P_P&$prodImageMedium$'},
    {id: 3, name: 'Screwdriver', price: 5, description: 'Gimme screw', isPromoted: false,
  photoUrl: 'http://www.irwin.com/uploads/products/large/irwin-torquezone%E2%84%A2-8-pc-screwdriver-set-2440.jpg'}
  ];

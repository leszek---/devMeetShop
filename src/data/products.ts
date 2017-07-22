import {Product} from '../models/productModel';

export const products: Product[] = [
    {
      id: 1, 
      name: 'Hammer', 
      price: 10, 
      isPromoted: false,
      photoUrl: 'https://www.montessoriservices.com/media/catalog/product/cache/1/thumbnail/550x/9df78eab33525d08d6e5fb8d27136e95/v/5/v508_hammer.jpg',
      description: "Hard attack"
    },
    {
      id: 2, 
      name: 'Drill', 
      price: 1, 
      description: 'Just a drill', 
      isPromoted: true,
      photoUrl: 'http://s7g3.scene7.com/is/image//ae235?src=ae235/2710P_P&$prodImageMedium$'
    },
    {
      id: 3, 
      name: 'Screwdriver', 
      price: 5, 
      description: 'Gimme screw', 
      isPromoted: false,
      photoUrl: 'http://www.irwin.com/uploads/products/large/irwin-torquezone%E2%84%A2-8-pc-screwdriver-set-2440.jpg'
    },
    {
      id: 4, 
      name: 'Wrench', 
      price: 43, 
      description: 'New shiny', 
      isPromoted: true,
      photoUrl: 'http://www.homedepot.com/catalog/productImages/1000/90/9052c725-765d-4dc9-af6d-94bc64297564_1000.jpg'
    },
    {
      id: 6, 
      name: 'Steel pipe wrench', 
      price: 70, 
      description: 'Your great choice', 
      isPromoted: true,
      photoUrl: 'http://www.homedepot.com/catalog/productImages/1000/2b/2bda80b3-e79b-4af4-8f8a-3e78bc4d5bd1_1000.jpg'
    },
    {
      id: 7, 
      name: 'Old Hammer', 
      price: 70, 
      description: 'Cheap model from china', 
      isPromoted: false,
      photoUrl: 'https://www.dlsweb.rmit.edu.au/toolbox/electrotech/toolbox1204/resources/03workshop/05hand_tools/images/mash_hammer.jpg'
    },
    {
      id: 8, 
      name: 'New Hammer Model', 
      price: 70, 
      description: 'The best of all hammers', 
      isPromoted: true,
      photoUrl: 'http://cdn.kk.org.s3.amazonaws.com/cooltools/2015/06/hammer.jpg'
    }


  ];

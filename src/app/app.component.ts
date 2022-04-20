import { Component } from '@angular/core';

import {Product} from './models/product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imageParent = "";

  products:Product[] = [
    {
      id:1,
      name:"product1",
      image:"./assets/images/album.jpg",
      price: 100
    },
    {
      id:2,
      name:"product1",
      image:"./assets/images/PRINCIPE.png",
      price: 100
    },
    {
      id:3,
      name:"product1",
      image:"./assets/images/album.jpg",
      price: 100
    },
    {
      id:4,
      name:"product1",
      image:"./assets/images/album.jpg",
      price: 100
    },
    {
      id:5,
      name:"product1",
      image:"./assets/images/album.jpg",
      price: 100
    },


  ];


  onLoaded(img:string){
    console.log("loaded padre", img)
  }
}

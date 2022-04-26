import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product.model';

import {StoreService} from '../../services/store.service'
import {ProductsService} from '../../services/products.service'


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  myShopingCart :Product[] = [];

  total = 0;
  products:Product[] = [];
  today = new Date();
  date = new Date(2021,1,21)

  constructor(private storeService: StoreService,
              private productsService: ProductsService){
    this.myShopingCart = this.storeService.getShoppingCart()
  }


  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data =>{
    this.products = data
    })
  }

  onAddToShopingCart(product:Product){
    console.log(product)
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

}

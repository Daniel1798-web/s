import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Product}from '../../models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {
    id:0,
    title:"",
    image:"",
    price: 0,
    category: "",
    description:"",
  };

  @Output() addedProduct = new EventEmitter<Product>();



  constructor() { }
  ngOnInit(): void {
    
  }

  onAddToCart(){
    this.addedProduct.emit(this.product);
  }

}

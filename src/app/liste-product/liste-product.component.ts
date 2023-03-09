import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-liste-product',
  templateUrl: './liste-product.component.html',
  styleUrls: ['./liste-product.component.css']
})
export class ListeProductComponent implements OnInit {
  listProducts!:Product[];
  ngOnInit(): void {
    this.listProducts=[
      {id:1, title:"pellow1", quantity:20, price:45, like:0},
      {id:2, title:"pellow2", quantity:10, price:20, like:0},
      {id:3, title:"pellow3", quantity:15, price:40, like:0}
    ]
  }
  incrementLike(p:Product){ 

    let i=this.listProducts.indexOf(p);
    this.listProducts[i].like++
  }

}

import { outputAst } from '@angular/compiler';
import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product!:Product;
  @Output() incrementEvent=new EventEmitter<Product>();

ngOnInit(): void {
  
}
sendNotif(){
  this.incrementEvent.emit(this.product)
}
constructor(){};

}

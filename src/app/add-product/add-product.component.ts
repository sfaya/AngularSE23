import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../Models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

P:Product= {id: 1, title: "t", price: 0, quantity: 0, like: 0};
constructor(private prodS:ProductService){}

ngOnInit(): void {
  this.prodS.getAllproducts().subscribe(data => this.P.id=data.length+1);
  
}
addProduct( F: NgForm){

  //console.log(this.prodS.list.length);
  
  //   console.log(F);
  // console.log(F.value);
  
    this.P.title = F.controls['title'].value;
    
    this.P.quantity= F.controls['qt'].value;
    
    this.P.price = F.controls['price'].value;


    this.P.like=0;  
console.log(this.P);

    this.prodS.addProduct(this.P).subscribe();
  }
}

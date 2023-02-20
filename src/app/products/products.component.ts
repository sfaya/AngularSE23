import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

    productList = this.productS.list;
    prix!:number;
   
    constructor(private R: Router, private productS:ProductService){}

    Buy(P:Product){
     // if( P.quantity>0){
        P.quantity--;
     // }

    }
    Like(P:Product){
      P.like++;
    }

    showDetails(id:number){
this.R.navigate(['productDetails', id]);
    }
}

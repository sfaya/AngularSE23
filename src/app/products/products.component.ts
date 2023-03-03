import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],

})
export class ProductsComponent implements OnInit{
  error= false
  productList!:Product[];
  prix!:number;
   
    constructor(private R: Router, private productS:ProductService){}
      
    ngOnInit(): void {
        this.getProducts();
      }
getProducts(){
  this.productS.getAllproducts().subscribe(
    data =>  this.productList=data 
    );
}


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


    delete(P: Product){
      this.productS.deleteProduct(P.id).subscribe(
        ()=> {
          alert('Deleted!');
          this.getProducts();
          //this.R.navigate(['/product']);
    })
      
    }
}

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
     
        P.quantity--;
        this.productS.updateProduct(P.id, P).subscribe(()=>this.getProducts());
      

    }
    Like(P:Product){
      P.like++;
    }

    showDetails(id:number){
this.R.navigate(['productDetails', id]);
    }


    delete(id: number){
      this.productS.deleteProduct(id).subscribe(
        ()=> {
          alert('Deleted!');
          this.getProducts();
          
    });
      
    }
}

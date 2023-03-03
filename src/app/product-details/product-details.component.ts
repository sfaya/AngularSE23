import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
id!:number;
param2!:number;
P!:Product;
constructor(private actR:ActivatedRoute, private productS:ProductService){}

ngOnInit(): void {
  this.id=this.actR.snapshot.params['id1'];
 this.productS.getProductById(this.id).subscribe(data => this.P=data);
}

}

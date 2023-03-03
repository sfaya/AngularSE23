import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/Product';

@Injectable({
  providedIn:'root'
})
export class ProductService {
  
  constructor(private http: HttpClient) { }
  //URL du backEnd
  url="http://localhost:3000/list";

  getAllproducts(){
    return this.http.get<Product[]>(this.url);
  }

  getProductById(id:number){
    return this.http.get<Product>(this.url+`/${id}`);
  }

  addProduct(p: Product){
    return this.http.post<Product>(this.url, p);
  }

  updateProduct(id:number, p:Product){
    return this.http.put(this.url+`/${id}`, p);
  }

  deleteProduct(id:number){
    return this.http.delete(this.url+`/${id}`);
  }

}

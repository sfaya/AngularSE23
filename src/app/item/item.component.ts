import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../Models/Product';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() item:any;
  @Input() condition!:number;

  @Output() send=new EventEmitter<Product>();
  @Output() sendTodelete = new EventEmitter();
  BuyFromDaD(){
    this.send.emit(this.item);
  }

  deleteFromDaD(){
    this.sendTodelete.emit(this.item.id);
  }

}

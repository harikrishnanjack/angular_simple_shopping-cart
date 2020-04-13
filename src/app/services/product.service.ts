import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products:Product[];

  constructor() { 
    this.products=[
      {id:'p001',name:'1 kg Carret',price:15,photo:'img2.jpg'},
      {id:'p002',name:'1 kg Brinjal',price:23,photo:'img1.jpg'},
      {id:'p003',name:'1 kg Bitterguard',price:30,photo:'img3.png'},
      
    ]
  }

findAll():Product[]{
  return this.products;
}
find(id:string):Product{
  return this.products[this.getSelectedIndex(id)];
}

private getSelectedIndex(id:string){
  for(var i=0;i<this.products.length;i++){
    if(this.products[i].id==id){
      return i;
    }
  }
  return -1;
}




}

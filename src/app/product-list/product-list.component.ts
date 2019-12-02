import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  Product = []
  constructor(private service: ProductService) { }

  ngOnInit() {
    this.service.getProducts().subscribe(response =>{
      if(response['status']==='success')
      {
        this.Product = response['data'] as any[]
      }else{
        console.log('error', response['error'])
      }
    })
  }

}

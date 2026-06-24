import { Component, OnInit } from '@angular/core';

/* service import */
import {ProductService} from '../../services/product'

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {

  constructor(private productService: ProductService) {}

  products: any[] = []

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data
    })
  }
}

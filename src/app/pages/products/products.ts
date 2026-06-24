import { Component, OnInit } from '@angular/core';

/* service import */
import { ProductService } from '../../services/product'

/* pipes import */
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CurrencyPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {

  constructor(private productService: ProductService) { }

  products: any[] = []

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data
      console.log(data)
    })
  }
}

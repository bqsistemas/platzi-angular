import { Component, OnInit } from '@angular/core';

import { Product } from '../../../product.model';
import { ProductsService } from './../../../core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  displayedColumns: string[] = [ 'id', 'title', 'price', 'actions' ];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: string, index: number) {
    this.productsService.deleteProduct(id)
      .subscribe(product => {
        //this.products.splice(index, 1);
        this.fetchProducts();
      });
  }

}

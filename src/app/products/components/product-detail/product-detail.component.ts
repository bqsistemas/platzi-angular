import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productService.getProduct(id)
      .subscribe(product => {
        this.product = product;
      });
  }

  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'Nuevo desde angular',
      image: 'assets/images/banner-1.jpg',
      price: 858.52,
      description: 'nuevo producto desde angular'
    };
    this.productService.createProduct(newProduct)
      .subscribe(product => {
        console.log(product);
      });
  }
  updateProduct(id: string) {
    const updateProduct: Partial<Product> = {
      title: 'Nuevo desde angular - update',
      image: 'assets/images/banner-1.jpg',
    };
    this.productService.updateProduct(id, updateProduct)
      .subscribe(product => {
        console.log(product);
      });
  }
  deleteProduct(id: string) {
    this.productService.deleteProduct(id)
      .subscribe(product => {
        console.log(product);
      });
  }
}

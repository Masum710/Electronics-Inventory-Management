
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../Services/products.services';
import { Product } from '../Models/products.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  products: Product[] = [];
  submitted = false;
  edited = false;
  loading = false;
  product = new Product(0, '', '', '', 0, 0);
  @ViewChild('productForm') productForm!: NgForm;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
        this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }

  onSubmit() {
    if (this.edited) return;
    this.productService.addProduct(this.product)
      .subscribe(() => {
        this.getProducts();
        this.resetEditPage();
      });
  }

  onPutSubmit() {
    this.edited = true;
    this.productService.updateProduct(this.product)
      .subscribe(() => {
        this.getProducts();
        this.productForm.resetForm();
        this.resetEditPage();
      });
  }

  onEditClick(data: Product) {
    this.edited = true;
    this.product.id = data.id;
    this.product.name = data.name;
    this.product.sku = data.sku;
    this.product.description = data.description;
    this.product.price = data.price;
    this.product.stock = data.stock;
  }

  resetEditPage() {
    this.product = new Product(0, '', '', '', 0, 0);
    this.edited = false;
  }

  onDeleteClick(data: Product) {
    this.productService.deleteProduct(data.id)
      .subscribe(() => {
        this.getProducts();
      });
  }
}

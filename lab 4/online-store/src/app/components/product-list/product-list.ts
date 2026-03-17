import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList implements OnChanges {

  @Input() products: Product[] = [];

  visibleProducts: Product[] = [];

  ngOnChanges() {
    this.visibleProducts = this.products.map(p => ({
      ...p,
      likes: p.likes ?? 0
    }));
  }

  onDelete(productId: number) {
    this.visibleProducts = this.visibleProducts.filter(p => p.id !== productId);
  }
}
import { Component, effect, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  product = input.required<Product>();
  delete = output<number>();

  selectedImage = '';

  constructor() {
    effect(() => {
      const p = this.product();
      this.selectedImage = p.image;
    });
  }

  setImage(url: string): void {
    this.selectedImage = url;
  }

  getStars(): {filled: boolean}[] {
    const rating = this.product().rating;
    const full = Math.floor(rating);
    return Array.from({ length: 5 }, (_, i) => ({ filled: i < full}));
  }

  like(): void {
    this.product().likes += 1;
  }

  onDelete(): void {
    this.delete.emit(this.product().id);
  }

  shareWhatsApp(): void {
    const text = `Check out this product: ${this.product().link}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  }

  shareTelegram(): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product().link)}&text=${encodeURIComponent(this.product().name)}`;
    window.open(url, '_blank');
  }
}
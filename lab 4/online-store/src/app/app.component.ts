import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductList } from './components/product-list/product-list';
import { ProductService } from './product.service';

import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, ProductList],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	categories: Category[] = [];
	selectedCategoryId: number | null = null;
	selectedProducts: Product[] = [];

	constructor(private productService: ProductService) {
		this.categories = this.productService.getCategories();


		if (this.categories.length > 0) {
			this.selectCategory(this.categories[0].id);
			this.categories = this.productService.getCategories();

			if (this.categories.length > 0) {
				this.selectCategory(this.categories[0].id);
			}
		}
	}

	selectCategory(categoryId: number) {
		this.selectedCategoryId = categoryId;
		this.selectedProducts = this.productService.getProductsByCategory(categoryId);
	}
}
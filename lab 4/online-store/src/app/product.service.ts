import { Injectable } from '@angular/core';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {

	categories: Category[] = [
		{ id: 1, name: 'Phones' },
		{ id: 2, name: 'Laptops' },
		{ id: 3, name: 'Headphones' },
		{ id: 4, name: 'Sports' },
	];

	products: Product[] = [
		{
			id: 1,
			categoryId: 1,
			name: 'iPhone 15',
			description: 'Apple smartphone',
			images: ['https://resources.cdn-kaspi.kz/img/m/p/h01/h5f/86303746293790.jpg?format=gallery-medium'],
			price: 391.000,
			rating: 5,
			link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-goluboi-113137929/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7imEUCwwPcMlyyqDq-6uRFZ1&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3CnQA1T2vLkPv3GtLOpscUUF7YMJh4FFr4Ak03O-6EO-4aCJAN3VBkaAhjAEALw_wcB',
			likes: 0
		},

		{
			id: 2,
			categoryId: 1,
			name: 'Samsung Galaxy S24',
			description: 'Samsung smartphone',
			images: ['https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium'],
			price: 647.000,
			rating: 4.5,
			link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7imEUCwwPcMlyyqDq-6uRFZ1&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3CnQA1T2vLkPv3GtLOpscUUF7YMJh4FFr4Ak03O-6EO-4aCJAN3VBkaAhjAEALw_wcB',
			likes: 0
		},

		{
			id: 3,
			categoryId: 1,
			name: 'Poco X6 Pro',
			description: 'Poco smartphone',
			images: ['https://resources.cdn-kaspi.kz/img/m/p/hbe/h45/84940376899614.jpg?format=gallery-medium'],
			price: 179.000,
			rating: 5,
			link: 'https://kaspi.kz/shop/p/poco-x6-pro-12-gb-512-gb-chernyi-115961596/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7imEUCwwPcMlyyqDq-6uRFZ1&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3CnQA1T2vLkPv3GtLOpscUUF7YMJh4FFr4Ak03O-6EO-4aCJAN3VBkaAhjAEALw_wcB',
			likes: 0
		},

		{
			id: 4,
			categoryId: 1,
			name: 'iPhone 16 Pro Max',
			description: 'Apple smartphone',
			images: ['https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium'],
			price: 720.000,
			rating: 5,
			link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7imEUCwwPcMlyyqDq-6uRFZ1&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3CnQA1T2vLkPv3GtLOpscUUF7YMJh4FFr4Ak03O-6EO-4aCJAN3VBkaAhjAEALw_wcB',
			likes: 0
		},

		{
			id: 5,
			categoryId: 1,
			name: 'Nothing Phone',
			description: 'Nothing smartphone',
			images: ['https://resources.cdn-kaspi.kz/img/m/p/pa2/pa8/42472022.png?format=gallery-medium'],
			price: 239.000,
			rating: 5,
			link: 'https://kaspi.kz/shop/p/nothing-phone-3a-12-gb-256-gb-sinii-139716558/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7imEUCwwPcMlyyqDq-6uRFZ1&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3CnQA1T2vLkPv3GtLOpscUUF7YMJh4FFr4Ak03O-6EO-4aCJAN3VBkaAhjAEALw_wcB',
			likes: 0
		},


	];

	getCategories(): Category[] {
		return this.categories;
	}

	getProductsByCategory(categoryId: number): Product[] {
		return this.products.filter(p => p.categoryId === categoryId);
	}
}
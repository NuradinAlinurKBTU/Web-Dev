import { Component } from '@angular/core';
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
export class ProductList {

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 16 256GB',
      description: 'Latest Apple smartphone with A16 chip. Excellent camera and battery life.',
      price: 780000,
      rating: 4.8,
      image: 'https://static.shop.kz/upload/resize_cache/iblock/406/laiynv539owfaamgmtzokapo3s1qaiky/450_450_1/192074d1.webp',
      images: [
        'https://technolove.ru/upload/iblock/f1e/pabnf4xdzps3s5bfqcucj6p74yl63fv6.jpg',
        'https://alo.md/media/media/apple-iphone-17-pro-max-cosmic-orange-frontback-xczwtqm.webp',
        'https://static.shop.kz/upload/resize_cache/iblock/406/laiynv539owfaamgmtzokapo3s1qaiky/450_450_1/192074d1.webp'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    },

    {
      id: 2,
      name: 'Apple iPad A16 11',
      description: 'The 2025 11-inch iPad (A16) is a, versatile and powerful entry-level tablet.',
      price: 210000,
      rating: 4.2,
      image: 'https://prod-cdn.prod.asbis.io/s3size/el:t/rt:fill/w:512/plain/s3://cms/product/f4/fa/f4fa1ec28bab27222c3661f341e1c359/250423160041192789.webp',
      images: [
        'https://technolove.ru/upload/iblock/f1e/pabnf4xdzps3s5bfqcucj6p74yl63fv6.jpg',
        'https://static.tildacdn.pro/tild3263-6561-4535-b866-383638383930/ipad-11_overview__xf.png',
        'https://prod-cdn.prod.asbis.io/s3size/el:t/rt:fill/w:512/plain/s3://cms/product/f4/fa/f4fa1ec28bab27222c3661f341e1c359/250423160041192789.webp'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    },

    {
      id: 3,
      name: 'iPhone 16 256GB',
      description: 'Latest Apple smartphone with A16 chip. Excellent camera and battery life.',
      price: 780000,
      rating: 4.8,
      image: 'https://static.shop.kz/upload/resize_cache/iblock/406/laiynv539owfaamgmtzokapo3s1qaiky/450_450_1/192074d1.webp',
      images: [
        'https://technolove.ru/upload/iblock/f1e/pabnf4xdzps3s5bfqcucj6p74yl63fv6.jpg',
        'https://alo.md/media/media/apple-iphone-17-pro-max-cosmic-orange-frontback-xczwtqm.webp',
        'https://static.shop.kz/upload/resize_cache/iblock/406/laiynv539owfaamgmtzokapo3s1qaiky/450_450_1/192074d1.webp'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    },

    {
      id: 4,
      name: 'iPhone 16 256GB',
      description: 'Latest Apple smartphone with A16 chip. Excellent camera and battery life.',
      price: 780000,
      rating: 4.8,
      image: 'https://static.shop.kz/upload/resize_cache/iblock/406/laiynv539owfaamgmtzokapo3s1qaiky/450_450_1/192074d1.webp',
      images: [
        'https://technolove.ru/upload/iblock/f1e/pabnf4xdzps3s5bfqcucj6p74yl63fv6.jpg',
        'https://alo.md/media/media/apple-iphone-17-pro-max-cosmic-orange-frontback-xczwtqm.webp',
        'https://static.shop.kz/upload/resize_cache/iblock/406/laiynv539owfaamgmtzokapo3s1qaiky/450_450_1/192074d1.webp'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    },

    {
      id: 5,
      name: 'iPhone 16 256GB',
      description: 'Latest Apple smartphone with A16 chip. Excellent camera and battery life.',
      price: 780000,
      rating: 4.8,
      image: 'https://static.shop.kz/upload/resize_cache/iblock/406/laiynv539owfaamgmtzokapo3s1qaiky/450_450_1/192074d1.webp',
      images: [
        'https://technolove.ru/upload/iblock/f1e/pabnf4xdzps3s5bfqcucj6p74yl63fv6.jpg',
        'https://alo.md/media/media/apple-iphone-17-pro-max-cosmic-orange-frontback-xczwtqm.webp',
        'https://static.shop.kz/upload/resize_cache/iblock/406/laiynv539owfaamgmtzokapo3s1qaiky/450_450_1/192074d1.webp'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    },

    {
      id: 6,
      name: 'iPhone 16 256GB',
      description: 'Latest Apple smartphone with A16 chip. Excellent camera and battery life.',
      price: 780000,
      rating: 4.8,
      image: 'https://static.shop.kz/upload/resize_cache/iblock/406/laiynv539owfaamgmtzokapo3s1qaiky/450_450_1/192074d1.webp',
      images: [
        'https://technolove.ru/upload/iblock/f1e/pabnf4xdzps3s5bfqcucj6p74yl63fv6.jpg',
        'https://alo.md/media/media/apple-iphone-17-pro-max-cosmic-orange-frontback-xczwtqm.webp',
        'https://static.shop.kz/upload/resize_cache/iblock/406/laiynv539owfaamgmtzokapo3s1qaiky/450_450_1/192074d1.webp'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    },

    {
      id: 7,
      name: 'iPhone 16 256GB',
      description: 'Latest Apple smartphone with A16 chip. Excellent camera and battery life.',
      price: 780000,
      rating: 4.8,
      image: 'https://static.shop.kz/upload/resize_cache/iblock/406/laiynv539owfaamgmtzokapo3s1qaiky/450_450_1/192074d1.webp',
      images: [
        'https://technolove.ru/upload/iblock/f1e/pabnf4xdzps3s5bfqcucj6p74yl63fv6.jpg',
        'https://alo.md/media/media/apple-iphone-17-pro-max-cosmic-orange-frontback-xczwtqm.webp',
        'https://static.shop.kz/upload/resize_cache/iblock/406/laiynv539owfaamgmtzokapo3s1qaiky/450_450_1/192074d1.webp'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    },

    {
      id: 8,
      name: 'iPhone 16 256GB',
      description: 'Latest Apple smartphone with A16 chip. Excellent camera and battery life.',
      price: 780000,
      rating: 4.8,
      image: 'https://static.shop.kz/upload/resize_cache/iblock/406/laiynv539owfaamgmtzokapo3s1qaiky/450_450_1/192074d1.webp',
      images: [
        'https://technolove.ru/upload/iblock/f1e/pabnf4xdzps3s5bfqcucj6p74yl63fv6.jpg',
        'https://alo.md/media/media/apple-iphone-17-pro-max-cosmic-orange-frontback-xczwtqm.webp',
        'https://static.shop.kz/upload/resize_cache/iblock/406/laiynv539owfaamgmtzokapo3s1qaiky/450_450_1/192074d1.webp'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    },

    {
      id: 9,
      name: 'iPhone 16 256GB',
      description: 'Latest Apple smartphone with A16 chip. Excellent camera and battery life.',
      price: 780000,
      rating: 4.8,
      image: 'https://static.shop.kz/upload/resize_cache/iblock/406/laiynv539owfaamgmtzokapo3s1qaiky/450_450_1/192074d1.webp',
      images: [
        'https://technolove.ru/upload/iblock/f1e/pabnf4xdzps3s5bfqcucj6p74yl63fv6.jpg',
        'https://alo.md/media/media/apple-iphone-17-pro-max-cosmic-orange-frontback-xczwtqm.webp',
        'https://static.shop.kz/upload/resize_cache/iblock/406/laiynv539owfaamgmtzokapo3s1qaiky/450_450_1/192074d1.webp'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    },

  ];
}

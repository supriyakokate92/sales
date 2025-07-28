import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss'
})
export class ProductDetail implements OnInit {
  product: Product | undefined;
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 1200, category: 'Electronics', description: 'Powerful laptop for work and gaming', inStock: true, releaseDate: new Date('2024-01-15') },
    { id: 2, name: 'Mouse', price: 25, category: 'Electronics', description: 'Ergonomic mouse for comfortable use', inStock: false, releaseDate: new Date('2023-11-01') },
    { id: 3, name: 'Keyboard', price: 75, category: 'Electronics', description: 'Mechanical keyboard with RGB lighting', inStock: true, releaseDate: new Date('2024-03-20') },
    { id: 4, name: 'Monitor', price: 300, category: 'Electronics', description: 'High-resolution monitor for vivid visuals', inStock: true, releaseDate: new Date('2024-02-10') },
    { id: 5, name: 'Webcam', price: 50, category: 'Peripherals', description: 'Full HD webcam for clear video calls', inStock: false, releaseDate: new Date('2023-12-05') }
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id'); // Get ID from URL
    if (productId) {
      this.product = this.products.find(p => p.id === +productId); // Find product by ID
    }
  }

  goBackToList() {
    this.router.navigate(['/products']);
  }
}

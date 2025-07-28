import { Component, OnInit } from '@angular/core';
import {ColumnDef} from '../../shared/models/column.model';
import { Product } from '../../shared/models/product.model';
import { MatTableDataSource } from '@angular/material/table';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList implements OnInit {
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 1200, category: 'Electronics', description: 'Powerful laptop for work and gaming', inStock: true, releaseDate: new Date('2024-01-15') },
    { id: 2, name: 'Mouse', price: 25, category: 'Electronics', description: 'Ergonomic mouse for comfortable use', inStock: false, releaseDate: new Date('2023-11-01') },
    { id: 3, name: 'Keyboard', price: 75, category: 'Electronics', description: 'Mechanical keyboard with RGB lighting', inStock: true, releaseDate: new Date('2024-03-20') },
    { id: 4, name: 'Monitor', price: 300, category: 'Electronics', description: 'High-resolution monitor for vivid visuals', inStock: true, releaseDate: new Date('2024-02-10') },
    { id: 5, name: 'Webcam', price: 50, category: 'Peripherals', description: 'Full HD webcam for clear video calls', inStock: false, releaseDate: new Date('2023-12-05') }
  ];

  columnDefinitions: ColumnDef[] = [
    { field: 'id', header: 'Product ID', enabled: true },
    { field: 'name', header: 'Product Name', enabled: true },
    { field: 'price', header: 'Price', enabled: true },
    { field: 'category', header: 'Category', enabled: true },
    { field: 'inStock', header: 'In Stock', enabled: false } // Initially disabled
  ];

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource(this.products);

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.updateDisplayedColumns();
  }

  updateDisplayedColumns() {
    this.displayedColumns = this.columnDefinitions
      .filter(col => col.enabled)
      .map(col => col.field);
  }

  viewProductDetails(id: number) {
    this.router.navigate(['/products', id]); // Navigates to /products/:id
  }
}

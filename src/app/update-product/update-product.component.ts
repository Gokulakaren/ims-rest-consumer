import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id!: number;
  product: Product = new Product;
  submitted = false;
  products: Observable<Product[]> | any;

  private route: ActivatedRoute = new ActivatedRoute;
  private router: Router = new Router;
  private productService!: ProductService;

  constructor() { }

  ngOnInit(): void {

    
  }

}

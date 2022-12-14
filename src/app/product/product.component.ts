import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/Dataproduct.service';
import { Product } from './product';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})

export class ProductComponent implements OnInit {
  products: Array<Product> = [];
  constructor(public product: DataService,private router: Router) {}
  automatic(){
    this.router.navigate(['/details']);
  }
  ngOnInit(): void {
    this.product.getproducts().subscribe((data: any[]) => {
      this.products = (data as any).products;
      console.log(this.products);
      console.log(data);
    });
  }
}


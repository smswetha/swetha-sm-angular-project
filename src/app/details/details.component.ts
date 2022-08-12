import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product/product';
import { DataService } from '../service/Dataproduct.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
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
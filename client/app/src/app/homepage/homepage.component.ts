import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators'
import { Product } from './../models/product'


//Service:
import { ProductsService } from '../services/products.service';
import { Subscription, Observable } from 'rxjs';

@Component({
	selector: 'homepage',
	templateUrl: './homepage.component.html',
	styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  products: Product[] = [];
  loading: boolean;

  constructor( 
    private productsService: ProductsService,
    private router : Router
  ) { 

    this.loading = true;

    this.productsService.getProducts()
      .subscribe( (data: any) => {
        console.log(data.data);
        this.products = data.data;
        this.loading = false;
        
      })
  }

  

	ngOnInit() {
    
  }

}
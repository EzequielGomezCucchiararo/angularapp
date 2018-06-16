import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators'
import { Product } from './../models/product'
import { Subscription, Observable } from 'rxjs';
import { ProductsService } from '../services/products.service';

@Component({
	selector: 'homepage',
	templateUrl: './homepage.component.html',
	styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy {
	public products: Product[] = [];
	public productsFiltered: Product[] = [];
	public loading: boolean = true;
	private currentFilter: any = {
		size: '',
		price: ''
	}
	private productsSubscription: Subscription = null;

	constructor(
		private productsService: ProductsService,
		private router: Router
	) { }

	ngOnInit() {
		this.productsSubscription = this.productsService.getProducts()
			.subscribe((data: any) => {
				this.products = data.data;
				this.productsFiltered = [...this.products];
				this.loading = false;
			})
	}

	onFilterChange(event: Event) {
		this.productsFiltered = this.filterProducts(event);
	}

	ngOnDestroy() {
		if (this.productsSubscription) {
			this.productsSubscription.unsubscribe();
		}
	}

	private filterProducts(filterData: any): Product[] {
		let productsFiltered = [];

		if (filterData.type === 'size') {
			if (filterData.value) {
				productsFiltered = this.products.filter((product: Product) => {
					return product.size === +filterData.value;
				})
			} else {
				productsFiltered = [...this.products];
			}
		}

		if (filterData.type === 'price') {
			let min = 0;
			let max = 0;
			if (filterData) {
				switch (filterData.value) {
					case '-50':
						min = 0;
						max = 50;
						break;

					case '50-100':
						min = 50;
						max = 100;
						break;

					case '100-200':
						min = 100;
						max = 200;
						break;

					case '200-500':
						min = 200;
						max = 500;
						break;

					case '500+':
						min = 500;
						max = 500000;
						break;
				}
				productsFiltered = this.products.filter((product: Product) => {
					return ((product.price >= min) && (product.price <= max));
				})
			} else {
				productsFiltered = [...this.products];
			}
		}

		return productsFiltered;
	}

}
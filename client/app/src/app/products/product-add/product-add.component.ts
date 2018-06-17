import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { AuthService } from '../../services/auth.service';


@Component({
	selector: 'app-product-add',
	templateUrl: './product-add.component.html',
	styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

	public product = {
		image: null,
		price: '', //EEEY EN EL BACK PONGO Q ES NUMBER
		size: '',
		color: '',
		description: ''
	}

	constructor(private authService: AuthService) { }

	ngOnInit() { }

	handlerSubmit() {
		this.authService.addProduct({
			...this.product,
			price: +this.product.price,
			size: +this.product.size,
		})
			.subscribe(res => {
				console.log(res)
			})
	}

	onFileSelected(event) {
		this.product.image = event.target.files[0];
	}

}

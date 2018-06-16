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
    image: 'https://cdn0.bodas.net/emp/fotos/3/3/5/2/4/2018-helois-lunanovias-1_1_33524_v1.jpg',
    price:'', //EEEY EN EL BACK PONGO Q ES NUMBER
    size: '',
    color: '',
    description: ''
  }

  constructor( private authService: AuthService ) { 

    
  }
  handlerSubmit() {
    console.log(this.product)
    this.authService.addProduct(this.product)
      .subscribe(res => {
        console.log ( res )
      })
  }
  ngOnInit() {
  }

}

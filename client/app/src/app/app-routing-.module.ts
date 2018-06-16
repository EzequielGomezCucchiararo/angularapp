import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from "./auth/login/login.component";
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductDetailComponent } from "./products/product-detail/product-detail.component";
import { ProfileComponent } from './profile/profile.component';
import { MyProductsComponent } from './products/my-products/my-products.component';



const routes: Routes = [ 
    { path: '', component: HomepageComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'add-product', component: ProductAddComponent},
    { path: 'product/:id', component: ProductDetailComponent},
    { path: 'my-products', component: MyProductsComponent}  
] 

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]

}) 
export class AppRoutingModule {} 
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { PRODUCT_ROUTES } from './product/product.routes';

const APP_ROUTES: Routes = [
    {path: 'product', component:ProductComponent, children:PRODUCT_ROUTES},
    {path:'about', component:AboutComponent},
    {path: '', component:HomeComponent} ];

export const routing = RouterModule.forRoot(APP_ROUTES);

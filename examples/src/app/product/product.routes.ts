import { Routes, RouterModule } from '@angular/router';
import { ProductoneComponent } from './productone/productone.component';
import { ProducttwoComponent } from './producttwo/producttwo.component';


export const PRODUCT_ROUTES: Routes = [
    {path: 'productone', component:ProductoneComponent},
    {path:'producttwo', component:ProducttwoComponent},
   ];



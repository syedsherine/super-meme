import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { MyNewComponentOneComponent } from './my-new-component-one/my-new-component-one.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routes';
import { ProductoneComponent } from './product/productone/productone.component';
import { ProducttwoComponent } from './product/producttwo/producttwo.component';
import { MyNewServiceService } from "./common/my-new-service.service";


@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    MyNewComponentOneComponent,
    HomeComponent,
    ProductComponent,
    AboutComponent,
    ProductoneComponent,
    ProducttwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [MyNewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

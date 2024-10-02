import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductService } from './Services/products.services';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const routes = [
  { path: '', redirectTo:'/home', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: '**', redirectTo: '/home' } 
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
     BrowserModule,
     FormsModule,
     HttpClientModule,
     RouterModule.forRoot(routes),
  ],
  providers: [
    ProductService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

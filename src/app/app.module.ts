import { ProductsService } from './services/products.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { FormsModule } from '@angular/forms';

import { NavigationComponent } from './views/navigation/navigation.component';
import { CarouselComponent } from './views/carousel/carousel.component';
import { LoginComponent } from './views/login/login.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { CartComponent } from './views/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { MensClothesComponent } from './views/mens-clothes/mens-clothes.component';
import { CategoryService } from './services/category.service';
import { RatingModule } from 'ng-starrating';
import { DealsComponent } from './views/deals/deals.component';
import { SingleProductComponent } from './views/single-product/single-product.component';
import { BeautyComponent } from './views/categories/beauty/beauty.component';
import { PromotionsComponent } from './views/categories/promotions/promotions.component';
import { AutomobilesComponent } from './views/categories/automobiles/automobiles.component';
import { MachineryComponent } from './views/categories/machinery/machinery.component';
import { TopBeautyComponent } from './views/topCategories/top-beauty/top-beauty.component';
import { TopPhonesComponent } from './views/topCategories/top-phones/top-phones.component';
import { LaptopsTapletsComponent } from './views/categories/laptops-taplets/laptops-taplets.component';
import { HomeBeddingComponent } from './views/categories/home-bedding/home-bedding.component';
import { LightsComponent } from './views/categories/lights/lights.component';
import { ElectriCarsComponent } from './views/categories/electri-cars/electri-cars.component';
import { BabyComponent } from './views/topCategories/baby/baby.component';
import { VideoGamesComponent } from './views/topCategories/video-games/video-games.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavigationComponent,
    CarouselComponent,
    LoginComponent,
    SignUpComponent,
    CartComponent,
    MensClothesComponent,
    DealsComponent,
    SingleProductComponent,
    BeautyComponent,
    PromotionsComponent,
    AutomobilesComponent,
    MachineryComponent,
    TopBeautyComponent,
    TopPhonesComponent,
    LaptopsTapletsComponent,
    HomeBeddingComponent,
    LightsComponent,
    ElectriCarsComponent,
    BabyComponent,
    VideoGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RatingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true
    })
  ],
  providers: [
    CategoryService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

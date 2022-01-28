import { VideoGamesComponent } from './views/topCategories/video-games/video-games.component';
import { BabyComponent } from './views/topCategories/baby/baby.component';
import { ElectriCarsComponent } from './views/categories/electri-cars/electri-cars.component';
import { LightsComponent } from './views/categories/lights/lights.component';
import { HomeBeddingComponent } from './views/categories/home-bedding/home-bedding.component';
import { LaptopsTapletsComponent } from './views/categories/laptops-taplets/laptops-taplets.component';
import { TopBeautyComponent } from './views/topCategories/top-beauty/top-beauty.component';
import { DealsComponent } from './views/deals/deals.component';
import { SingleProductComponent } from './views/single-product/single-product.component';
import { MensClothesComponent } from './views/mens-clothes/mens-clothes.component';
import { CartComponent } from './views/cart/cart.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeautyComponent } from './views/categories/beauty/beauty.component';
import { MachineryComponent } from './views/categories/machinery/machinery.component';
import { AutomobilesComponent } from './views/categories/automobiles/automobiles.component';
import { TopPhonesComponent } from './views/topCategories/top-phones/top-phones.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'search/:searchTerm', component: MachineryComponent },
  { path: 'login', component:LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'clothes', component: MensClothesComponent},
  { path: 'cart', component: CartComponent },
  // { path: 'category/:category', component:MensClothesComponent },
  { path: 'category/beauty', component:BeautyComponent },
  { path: 'category/deals', component:DealsComponent },
  { path: 'category/automobiles', component:AutomobilesComponent },
  { path: 'category/machinery', component:MachineryComponent },
  { path: 'topphones', component: TopPhonesComponent },
  { path: 'topbeauty', component: TopBeautyComponent },
  { path: 'category/laptops', component: LaptopsTapletsComponent },
  { path: 'category/homebedding', component: HomeBeddingComponent },
  { path: 'category/lights', component:LightsComponent },
  { path: 'category/electriccars', component: ElectriCarsComponent },
  { path: 'topbaby', component: BabyComponent },
  { path: 'videogames', component: VideoGamesComponent },
  { path: 'product/:id', component:SingleProductComponent },



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

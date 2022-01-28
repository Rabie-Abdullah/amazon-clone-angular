import { CategoryService } from './../../../services/category.service';
import { ProductsService } from './../../../services/products.service';
import { Product } from './../../../interfaces/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.css']
})
export class BeautyComponent implements OnInit {

  beauties!:any
  constructor(private productsService:ProductsService, private categoryService: CategoryService) { }

  getBeautyData() {
    return this.beauties =  this.categoryService.getBeautyData()
  }
  
  
  ngOnInit(): void {
    this.getBeautyData()
  }

}

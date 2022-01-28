import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-top-beauty',
  templateUrl: './top-beauty.component.html',
  styleUrls: ['./top-beauty.component.css']
})
export class TopBeautyComponent implements OnInit {


  beauties!:any
  constructor( private categoryService: CategoryService) { }

  getBeautyData() {
    return this.beauties =  this.categoryService.getBeautyData()
  }
  
  
  ngOnInit(): void {
    this.getBeautyData()
  }

}

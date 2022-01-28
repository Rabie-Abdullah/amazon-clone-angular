import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-electri-cars',
  templateUrl: './electri-cars.component.html',
  styleUrls: ['./electri-cars.component.css']
})
export class ElectriCarsComponent implements OnInit {

  products!:any
  constructor(private categoryService: CategoryService) { }

  getElectricCars() {
    return this.products = this.categoryService.getElectricCars()
  }
  ngOnInit(): void {
    this.getElectricCars()
  }

}

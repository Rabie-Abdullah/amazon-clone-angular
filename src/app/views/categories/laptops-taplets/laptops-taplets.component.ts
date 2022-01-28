import { CategoryService } from 'src/app/services/category.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-laptops-taplets',
  templateUrl: './laptops-taplets.component.html',
  styleUrls: ['./laptops-taplets.component.css']
})
export class LaptopsTapletsComponent implements OnInit {

  features!:any[]
  constructor(private categoryService: CategoryService) { }


  getlaptopAndTaplets() {
    return this.features = this.categoryService.getlaptopAndTaplets()
  }

  ngOnInit(): void {
    this.getlaptopAndTaplets()
  }

}

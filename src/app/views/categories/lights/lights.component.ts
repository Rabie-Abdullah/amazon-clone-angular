import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.css']
})
export class LightsComponent implements OnInit {

  products!:any
  constructor(private categoryService: CategoryService) { }

  getLights() {
    return this.products = this.categoryService.getLights()
  }
  
  ngOnInit(): void {
    this.getLights()
  }

}

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-home-bedding',
  templateUrl: './home-bedding.component.html',
  styleUrls: ['./home-bedding.component.css']
})
export class HomeBeddingComponent implements OnInit {

  features!:any
  constructor(private categoryService: CategoryService) { }

  getBeds() {
    return this.features = this.categoryService.getBeds()
  }
  


  ngOnInit(): void {
    this.getBeds()
  }

}

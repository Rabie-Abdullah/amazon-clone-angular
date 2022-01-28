import { CategoryService } from 'src/app/services/category.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-baby',
  templateUrl: './baby.component.html',
  styleUrls: ['./baby.component.css']
})
export class BabyComponent implements OnInit {

  phones!:Product[]
  constructor(private categoryService: CategoryService) { }
  
  getBabyProducts() {
    return this.phones =  this.categoryService.getBabyProducts()
  }


  ngOnInit(): void {
    this.getBabyProducts()
  }

}

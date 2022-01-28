import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-automobiles',
  templateUrl: './automobiles.component.html',
  styleUrls: ['./automobiles.component.css']
})
export class AutomobilesComponent implements OnInit {



  products:any
  constructor(private categoryServices: CategoryService) { }


 getAutombiliesProducts() {
   return this.products = this.categoryServices.getAutombiliesProducts()
 }
  ngOnInit(): void {
    this.getAutombiliesProducts()
  }

}

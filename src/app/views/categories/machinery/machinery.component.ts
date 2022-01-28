import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-machinery',
  templateUrl: './machinery.component.html',
  styleUrls: ['./machinery.component.css']
})
export class MachineryComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }
  products:any
  getMachinaryProducts() {
    this.products = this.categoryService.getMachinaryProducts()
  }

  ngOnInit(): void {
    this.getMachinaryProducts()
  }

}

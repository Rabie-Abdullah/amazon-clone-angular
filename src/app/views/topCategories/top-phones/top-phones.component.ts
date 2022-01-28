import { Product } from 'src/app/interfaces/product';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-top-phones',
  templateUrl: './top-phones.component.html',
  styleUrls: ['./top-phones.component.css']
})
export class TopPhonesComponent implements OnInit {

  phones:any
  constructor( private categoryService: CategoryService) { }

  getTopPhones() {
    return this.phones =  this.categoryService.getTopPhones()
  }

  ngOnInit(): void {
    this.getTopPhones()
  }

}

import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

  constructor(private categoryService: CategoryService, private productService: ProductsService , private router: Router, private route:ActivatedRoute ) { }


  products:any
  getMachinaryProducts() {
    this.products = this.categoryService.getMachinaryProducts()
  }

  ngOnInit(): void {
    this.getMachinaryProducts()

    this.route.params.subscribe(params => {
      console.log(params['searchTerm'])

      if(params['searchTerm']) {
        this.products  = this.categoryService.getAllBySearchTerm(params['searchTerm'])
      } else if(params['tag']) {
        // this.products = this.categoryService.getAllFoodsByTag(params['tag'])

      }
       else {
        // this.products = this.productService.getAll()
      }
    })
   
  }
}

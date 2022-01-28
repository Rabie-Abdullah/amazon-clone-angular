import { Product } from 'src/app/interfaces/product';
import { ProductsService } from './../../services/products.service';
import { Category } from './../../interfaces/category';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mens-clothes',
  templateUrl: './mens-clothes.component.html',
  styleUrls: ['./mens-clothes.component.css']
})
export class MensClothesComponent implements OnInit {

  constructor(private productService:ProductsService,  private route:ActivatedRoute) { }

  products!:Product[]

  getData() {
    this.productService.getAll().subscribe({
      next: (res:any) => {
       
        this.products = res
        
        console.log(res)
      },
      error: (httpError:any) => {
        console.log(httpError)
      }
    })
  }



  ngOnInit(): void {
    this.getData()

    // this.route.params.subscribe(params => {
    //   console.log(params['searchTerm'])
    //   if(params['searchTerm']) {
    //     this.products  = this.productService.getAllProductBySearchTerm(params['searchTerm'])
    //   } else if(params['tag']) {
    //     this.products = this.productService.getAllProductssByTag(params['tag'])

    //   }
    //    else {
    //     this.products = this.productService.getAll()
    //   }
    // })
    

  }

}

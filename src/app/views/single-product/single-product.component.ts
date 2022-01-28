import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {


  productId:any
  product:any
  constructor(private catetegoryService:CategoryService, private activatedRoute: ActivatedRoute, private router:Router, private toastr:ToastrService) { 
  
    //   activatedRoute.params.subscribe((params) => {

  //     if(params['id']) {
  //       this.product = catetegoryService.getProductById(params['id'])
  //     }
  // })
  }

 
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id')
    this.product = this.catetegoryService.products[this.productId - 1]
    // console.log(this.product)
  }

  addToCart() {
     this.catetegoryService.addToCart(this.product)
     this.toastr.success('Product added successfully!')
     this.router.navigateByUrl('/cart')

  }
 

}

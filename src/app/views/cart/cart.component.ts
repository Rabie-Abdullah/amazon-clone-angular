import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  ordersList:any[] = [];
  shoppingLength!:number
  amountOfProduct:any = 1

  constructor(private categoryService: CategoryService, private toastr:ToastrService) { 
   
  }

  getCartData() {
   this.ordersList =  this.categoryService.cartList
     this.shoppingLength = this.ordersList.length
  }
  removeFromCart(i:number) {
    this.categoryService.removeFromCart(i)
    this.toastr.warning('Product removed from your cart successfully!')

  }

  totalPriceForOneProduct:any
  totalPriceForOneProducts:any
  increseAmountOfProduct(i:number) {
    if(this.categoryService.cartList[i].quantity > 0) {
      this.amountOfProduct = this.categoryService.cartList[i].quantity++
      // console.log(this.amountOfProduct)
      
      // console.log(this.totalPriceForOneProduct)
    }
    this.totalPriceForOneProduct = this.categoryService.cartList[i].price
      
      this.totalPriceForOneProduct  = this.amountOfProduct * this.categoryService.cartList[i].price

  }
  decreaseAmountOfProduct(i:number) {
    if(this.categoryService.cartList[i].quantity > 0) {
      this.amountOfProduct = this.categoryService.cartList[i].quantity--
      // console.log(this.amountOfProduct)
    }
    this.totalPriceForOneProduct = this.categoryService.cartList[i].price
      
      this.totalPriceForOneProduct = this.amountOfProduct * this.categoryService.cartList[i].price
      // console.log(this.totalPriceForOneProduct)
    }
    totalPriceForProducts:any 
    totalPrice() {
       this.categoryService.cartList.forEach(item => {
        this.totalPriceForProducts  = item.price * item.quantity
        console.log(this.totalPriceForProducts)
      })
    }


  ngOnInit(): void {
    this.getCartData()  
    this.totalPrice()
  }


}

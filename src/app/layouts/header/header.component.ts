import { CategoryService } from 'src/app/services/category.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  numProducts:any

  constructor(private categoryService:CategoryService,private route:ActivatedRoute, private router:Router) { }

  searchTerm: String = ""  
  cartItems:any


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchTerm']) {
        return this.searchTerm = params['searchTerm']
      }
    })
   
  }

  search():void{

    
    if(this.searchTerm) {
     this.router.navigateByUrl('/search/' + this.searchTerm);

    }
  }

}

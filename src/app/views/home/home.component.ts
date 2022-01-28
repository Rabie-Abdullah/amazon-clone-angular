import { Product } from 'src/app/interfaces/product';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from './../../services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private categoryService: CategoryService, private productService: ProductsService , private router: Router, private route:ActivatedRoute ) { }

  features:any[] = [
    {
      imageUrl: 'assets/sections/images/makeup.jpeg',
      title: 'Beauty picks',
      linkData: 'see more',
      category: 'beauty'
    },
    {
      imageUrl: 'assets/sections/images/deals.jpeg',
      title: 'Deals & Promotions',
      linkData: 'see more',
      category: 'deals'

    },
    {
      imageUrl: 'assets/sections/images/motorcycle.jpeg',
      title: 'Automobiles & Motorcycles',
      linkData: 'see more',
      category: 'automobiles'

    },
    {
      imageUrl: 'assets/sections/images/machinery.jpeg',
      title: 'Machinery',
      linkData: 'see more',
      category: 'machinery'

    },
  ]

    

  beauties:any[] = [
    {
      imageUrl: 'assets/sections/images/beauty_prod01.jpeg'
    },
    {
      imageUrl: 'assets/sections/images/beauty_prod02.jpeg'
    },
    {
      imageUrl: 'assets/sections/images/beauty_prod03.jpeg'
    },
    {
      imageUrl: 'assets/sections/images/beauty_prod04.jpeg'
    },
    {
      imageUrl: 'assets/sections/images/beauty_prod05.jpeg'
    },
    {
      imageUrl: 'assets/sections/images/beauty_prod06.jpeg'
    }
  ]
  topPhones:any[] = [
    {
      imageUrl: 'assets/sections/images/phone_prod01.jpeg'
    },
    {
      imageUrl: 'assets/sections/images/phone_prod02.jpeg'
    },
    {
      imageUrl: 'assets/sections/images/phone_prod03.jpeg'
    },
    {
      imageUrl: 'assets/sections/images/phone_prod04.jpeg'
    },
    {
      imageUrl: 'assets/sections/images/phone_prod05.jpeg'
    },
    {
      imageUrl: 'assets/sections/images/phone_prod06.jpeg'
    }
  ]
  features2:any[] = [
    {
      imageUrl: 'assets/sections/images/feature-2-01.jpeg',
      title: 'Shop Laptops & Tablets',
      linkData: 'see more',
      category: 'laptops'


    },
    {
      imageUrl: 'assets/sections/images/feature-2-02.jpeg',
      title: 'Explore home bedding',
      linkData: 'see more',
      category: 'homebedding'

    },
    {
      imageUrl: 'assets/sections/images/feature-2-03.jpeg',
      title: 'Create with strip lights',
      linkData: 'see more',
      category: 'lights'

    },
    {
      imageUrl: 'assets/sections/images/feature-2-04.jpeg',
      title: 'Electeic car',
      linkData: 'see more',
      category: 'electriccars'

    }
  ]

  topGifts:any[] = [
    {
      imageUrl: 'assets/sections/images/games01.jpeg'
    },
    {
      imageUrl: 'assets/sections/images/games02.jpeg'
    },
    {
      imageUrl: 'assets/sections/images/games03.jpeg'
    },
    {
      imageUrl: 'assets/sections/images/games04.jpeg'
    },
    {
      imageUrl: 'assets/sections/images/games05.jpeg'
    },
    {
      imageUrl: 'assets/sections/images/games06.jpeg'
    },
  ]

  topBaby:any[] = [
    {
      imageUrl: 'assets/sections/images/baby01.jpg'
    },
    {
      imageUrl: 'assets/sections/images/baby02.jpg'
    },
    {
      imageUrl: 'assets/sections/images/baby03.jpg'
    },
    {
      imageUrl: 'assets/sections/images/baby04.jpg'
    },
    {
      imageUrl: 'assets/sections/images/baby05.jpg'
    },
    {
      imageUrl: 'assets/sections/images/baby06.jpg'
    }
  ]
  topBeauty:any[] = [
    {
      imageUrl: 'assets/sections/images/beauty_prod01.jpeg'
    },
    {
      imageUrl: 'assets/sections/images/beauty_prod02.jpeg'
    },
    {
      imageUrl: 'assets/sections/images/beauty_prod03.jpeg'
    },
    {
      imageUrl: 'assets/sections/images/beauty_prod04.jpeg'
    },
    {
      imageUrl: 'assets/sections/images/beauty_prod05.jpeg'
    },
    {
      imageUrl: 'assets/sections/images/beauty_prod06.jpeg'
    }
  ]


  topOther:any[] = [
    {
      imageUrl: 'assets/sections/images/games01.jpeg'
    },
    {
      imageUrl: 'assets/sections/images/games02.jpeg'
    },
    {
      imageUrl: 'assets/sections/images/games03.jpeg'
    },
    {
      imageUrl: 'assets/sections/images/games04.jpeg'
    },
    {
      imageUrl: 'assets/sections/images/games05.jpeg'
    },
    {
      imageUrl: 'assets/sections/images/games06.jpeg'
    },
  ]


    products:Product[] = []
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // console.log(params['searchTerm'])

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

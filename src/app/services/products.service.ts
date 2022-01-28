import { Product } from 'src/app/interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  product!:Product
  url= 'https://fakestoreapi.com/products/'

  constructor(private http:HttpClient) { }

  beauties:Product[] = [
    {
      id: 2,
      price: 22.3,
      description: 'this is awesome product',
      category: 'beauty',
      rating: 4.1,
      count: 200,
      imageUrl: 'assets/sections/images/beauty_prod01.jpeg'
    },
    {
      id: 2,
      price: 22.3,
      description: 'this is awesome product',
      category: 'beauty',
      rating: 4.1,
      count: 200,
      imageUrl: 'assets/sections/images/beauty_prod02.jpeg'
    },
    {
      id: 2,
      price: 22.3,
      description: 'this is awesome product',
      category: 'beauty',
      rating: 4.1,
      count: 200,
      imageUrl: 'assets/sections/images/beauty_prod03.jpeg'
    },
    {
      id: 2,
      price: 22.3,
      description: 'this is awesome product',
      category: 'beauty',
      rating: 4.1,
      count: 200,
      imageUrl: 'assets/sections/images/beauty_prod04.jpeg'
    },
    {
      id: 2,
      price: 22.3,
      description: 'this is awesome product',
      category: 'beauty',
      rating: 4.1,
      count: 200,
      imageUrl: 'assets/sections/images/beauty_prod05.jpeg'
    },
    {
      id: 2,
      price: 22.3,
      description: 'this is awesome product',
      category: 'beauty',
      rating: 4.1,
      count: 200,
      imageUrl: 'assets/sections/images/beauty_prod06.jpeg'
    }
  ]
  ////////////////////////promotions//////////////////
  automoblies:Product[] = [
    {
      id: 2,
      price: 22.3,
      description: 'this is awesome product',
      category: 'automobiles',
      rating: 4.1,
      title: 'Skoda', 

      count: 2000,
      imageUrl: 'https://media.istockphoto.com/photos/motorcycle-in-blurred-motion-picture-id1281248765?b=1&k=20&m=1281248765&s=170667a&w=0&h=2TDpaY5dzuNxif7qm-nCXOcOrH3GbAxdoYRdH4_C0C4='
    },
    {
      id: 2,
      price: 22.3,
      description: 'this is awesome product',
      category: 'automobiles',
      rating: 4.1,
      title: 'Toyota', 

      count: 1500,
      imageUrl: 'https://media.istockphoto.com/photos/see-the-world-for-what-it-truly-is-beautiful-picture-id1307962566?b=1&k=20&m=1307962566&s=170667a&w=0&h=wkz-YY16wHmKC9yuTXqr7_v2eITNf8jZifiDmoZXehQ='
    },
    {
      id: 2,
      price: 22.3,
      description: 'this is awesome product',
      title: 'Jep', 

      category: 'automobiles',
      rating: 4.1,
      count: 3000,
      imageUrl: 'https://images.unsplash.com/photo-1580310614729-ccd69652491d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW90b3JjeWNsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60'
    },
    {
      id: 2,
      price: 22.3,
      description: 'this is awesome product',
      category: 'automobiles',
      title: 'Toyota', 

      rating: 4.1,
      count: 2040,
      imageUrl: 'https://images.unsplash.com/photo-1616839261111-d7070563052c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdG9yY3ljbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
    },
    {
      id: 2,
      price: 22.3,
      title: 'Chevrolet', 

      description: 'this is awesome product',
      category: 'automobiles',
      rating: 4.1,
      count: 2400,
      imageUrl: 'https://media.istockphoto.com/photos/custom-bobber-motorbike-in-an-workshop-garage-picture-id1280454995?b=1&k=20&m=1280454995&s=170667a&w=0&h=xFJOghbvmGrxwDdZrI4CoPgpDUvCIgLo5W7O2nuHHiY='
    },
    {
      id: 2,
      title: 'Skoda', 
      price: 2222.3,
      description: 'this is awesome product',
      category: 'automobiles',
      rating: 4.1,
      count: 200,
      imageUrl: 'https://media.istockphoto.com/photos/father-and-son-riding-motorbike-picture-id509011855?b=1&k=20&m=509011855&s=170667a&w=0&h=leVePbaRCpuLgWQdnG25DXm60nfb4Rk7dC5ElEYGdM0='
    }
  ]
  ///////////////////////AutoMobiles///////////////
  products:any[] = [
    {
      id: 2,
      price: 22.3,
      description: 'this is awesome product',
      category: 'automobiles',
      rating: 4.1,
      title: 'Skoda', 

      count: 2000,
      imageUrl: 'https://images.unsplash.com/photo-1638210063939-8271a91535f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXV0b21iaWxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60'
    },
    {
      id: 2,
      price: 22.3,
      description: 'this is awesome product',
      category: 'automobiles',
      rating: 4.1,
      title: 'Toyota', 

      count: 1500,
      imageUrl: 'https://previews.123rf.com/images/rawpixel/rawpixel1509/rawpixel150905882/45629643-brandless-car-automobile-vehicle-concept.jpg'
    },
    {
      id: 2,
      price: 22.3,
      description: 'this is awesome product',
      title: 'Jep', 

      category: 'automobiles',
      rating: 4.1,
      count: 3000,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSdf9uiJ9-Dpe9duOB0YMz0DfhMilKrLDWsA&usqp=CAU'
    },
    {
      id: 2,
      price: 22.3,
      description: 'this is awesome product',
      category: 'automobiles',
      title: 'Toyota', 

      rating: 4.1,
      count: 2040,
      imageUrl: 'https://images.unsplash.com/photo-1581112606025-6e91da971d20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0b21iaWxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60'
    },
    {
      id: 2,
      price: 22.3,
      title: 'Chevrolet', 

      description: 'this is awesome product',
      category: 'automobiles',
      rating: 4.1,
      count: 2400,
      imageUrl: 'https://media.istockphoto.com/photos/road-trip-with-my-best-friend-picture-id1324380685?b=1&k=20&m=1324380685&s=170667a&w=0&h=T7fFkZmHzvye117esYVj5aRmZ5po_67XbDxIELFkBDg='
    },
    {
      id: 2,
      title: 'Skoda', 
      price: 2222.3,
      description: 'this is awesome product',
      category: 'automobiles',
      rating: 4.1,
      count: 200,
      imageUrl: 'https://media.istockphoto.com/photos/generic-modern-suv-car-in-concrete-garage-picture-id1307086567?b=1&k=20&m=1307086567&s=170667a&w=0&h=NjcM6LIOkmfhyqH-zrbFU7pHCPxIABvNhWaOElm_P-E='
    }
  ]

  ///////////////////////////Electric cars////////////////

  // }
  // getProductById(id:number):Product {
  //   return this.getAll().find(product => product.id == id)!
  // }

    
  getAll() {
    return this.http.get<any>(this.url)
  }
  
  
}

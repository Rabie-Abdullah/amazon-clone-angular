import { Product } from './../interfaces/product';
import { Category } from './../interfaces/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public cartList:any[] = []
  isProductExist:boolean = false
  constructor() {
    let storedItems = localStorage.getItem('cartList')

    if(storedItems) {
      this.cartList = JSON.parse(storedItems)
    } else {
      this.cartList = []
    }

   }
  products:Product[] = [
    
        {
          id: 1,
          price: 22.3,
          description: 'this is awesome product  product is the item offered for sale. A product can be a service or an item. It can be physical or in virtual or cyber form. ',
          category: 'beauty',
          title: 'Beaty', 
          rating: 4.1,
          count: 200,
          imageUrl: 'assets/sections/images/beauty_prod01.jpeg'
        },
        {
          id: 2,
          price: 22.3,
          description: 'this is awesome product  product is the item offered for sale. A product can be a service or an item. It can be physical or in virtual or cyber form. ',
          category: 'beauty',
          title: 'Beaty', 
          rating: 4.1,
          count: 200,
          imageUrl: 'assets/sections/images/beauty_prod02.jpeg'
        },
        {
          id: 3,
          price: 22.3,
          description: 'this is awesome product  product is the item offered for sale. A product can be a service or an item. It can be physical or in virtual or cyber form. ',
          category: 'beauty',
          title: 'Beaty', 
          rating: 4.1,
          count: 200,
          imageUrl: 'assets/sections/images/beauty_prod03.jpeg'
        },
        {
          id: 4,
          price: 22.3,
          description: 'this is awesome product  product is the item offered for sale. A product can be a service or an item. It can be physical or in virtual or cyber form. ',
          category: 'beauty',
          rating: 4.1,
          count: 200,
          title: 'Beaty', 
          imageUrl: 'assets/sections/images/beauty_prod04.jpeg'
        },
        {
          id: 5,
          price: 22.3,
          description: 'this is awesome product  product is the item offered for sale. A product can be a service or an item. It can be physical or in virtual or cyber form. ',
          category: 'beauty',
          rating: 4.1,
          count: 200,
          imageUrl: 'assets/sections/images/beauty_prod05.jpeg'
        },
        {
          id: 6,
          price: 22.3,
          description: 'this is awesome product  product is the item offered for sale. A product can be a service or an item. It can be physical or in virtual or cyber form. ',
          category: 'beauty',
          rating: 4.1,
          count: 200,
          title: 'Beaty', 
          imageUrl: 'assets/sections/images/beauty_prod06.jpeg'
        },{
          id: 7,
          price: 22.3,
          description: 'this is awesome product',
          
          category: 'automobiles',
          rating: 4.1,
          title: 'Skoda', 
          count: 2000,
          imageUrl: 'https://media.istockphoto.com/photos/motorcycle-in-blurred-motion-picture-id1281248765?b=1&k=20&m=1281248765&s=170667a&w=0&h=2TDpaY5dzuNxif7qm-nCXOcOrH3GbAxdoYRdH4_C0C4='
        },
        {
          id: 8,
          price: 22.3,
          description: 'this is awesome product',
          category: 'automobiles',
          rating: 4.1,
          title: 'Toyota', 
    
          count: 1500,
          imageUrl: 'https://media.istockphoto.com/photos/see-the-world-for-what-it-truly-is-beautiful-picture-id1307962566?b=1&k=20&m=1307962566&s=170667a&w=0&h=wkz-YY16wHmKC9yuTXqr7_v2eITNf8jZifiDmoZXehQ='
        },
        {
          id: 9,
          price: 22.3,
          description: 'this is awesome product',
          title: 'Jep', 
          category: 'automobiles',
          rating: 4.1,
          count: 3000,
          imageUrl: 'https://images.unsplash.com/photo-1580310614729-ccd69652491d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW90b3JjeWNsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60'
        },
        {
          id: 10,
          price: 22.3,
          description: 'this is awesome product',
          category: 'automobiles',
          title: 'Toyota', 
          rating: 4.1,
          count: 2040,
          imageUrl: 'https://images.unsplash.com/photo-1616839261111-d7070563052c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdG9yY3ljbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
        },
        {
          id: 11,
          price: 22.3,
          title: 'Chevrolet', 
          description: 'this is awesome product',
          category: 'automobiles',
          rating: 4.1,
          count: 2400,
          imageUrl: 'https://media.istockphoto.com/photos/custom-bobber-motorbike-in-an-workshop-garage-picture-id1280454995?b=1&k=20&m=1280454995&s=170667a&w=0&h=xFJOghbvmGrxwDdZrI4CoPgpDUvCIgLo5W7O2nuHHiY='
        },
        {
          id: 12,
          title: 'Skoda', 
          price: 2222.3,
          description: 'this is awesome product',
          category: 'automobiles',
          rating: 4.1,
          count: 200,
          imageUrl: 'https://media.istockphoto.com/photos/father-and-son-riding-motorbike-picture-id509011855?b=1&k=20&m=509011855&s=170667a&w=0&h=leVePbaRCpuLgWQdnG25DXm60nfb4Rk7dC5ElEYGdM0='
        },
      {
        id: 13,
        price: 22.3,
        description: 'this is awesome product',
        category: 'automobiles',
        rating: 4.1,
        title: 'Skoda', 
        count: 2000,
        imageUrl: 'https://images.unsplash.com/photo-1638210063939-8271a91535f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXV0b21iaWxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60'
      },
      {
        id: 14,
        price: 22.3,
        description: 'this is awesome product',
        category: 'automobiles',
        rating: 4.1,
        title: 'Toyota', 
        count: 1500,
        imageUrl: 'https://previews.123rf.com/images/rawpixel/rawpixel1509/rawpixel150905882/45629643-brandless-car-automobile-vehicle-concept.jpg'
      },
      {
        id: 15,
        price: 22.3,
        description: 'this is awesome product',
        title: 'Jep', 
        category: 'automobiles',
        rating: 4.1,
        count: 3000,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSdf9uiJ9-Dpe9duOB0YMz0DfhMilKrLDWsA&usqp=CAU'
      },
      {
        id: 16,
        price: 22.3,
        description: 'this is awesome product',
        category: 'automobiles',
        title: 'Toyota', 
        rating: 4.1,
        count: 2040,
        imageUrl: 'https://images.unsplash.com/photo-1581112606025-6e91da971d20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0b21iaWxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60'
      },
      {
        id: 17,
        price: 22.3,
        title: 'Chevrolet', 
        description: 'this is awesome product',
        category: 'automobiles',
        rating: 4.1,
        count: 2400,
        imageUrl: 'https://media.istockphoto.com/photos/road-trip-with-my-best-friend-picture-id1324380685?b=1&k=20&m=1324380685&s=170667a&w=0&h=T7fFkZmHzvye117esYVj5aRmZ5po_67XbDxIELFkBDg='
      },
      {
        id: 18,
        title: 'Skoda', 
        price: 2222.3,
        description: 'this is awesome product',
        category: 'automobiles',
        rating: 4.1,
        count: 200,
        imageUrl: 'https://media.istockphoto.com/photos/generic-modern-suv-car-in-concrete-garage-picture-id1307086567?b=1&k=20&m=1307086567&s=170667a&w=0&h=NjcM6LIOkmfhyqH-zrbFU7pHCPxIABvNhWaOElm_P-E='
      },  {
          id: 19,
          price: 100.3,
          description: 'this is awesome product',
          category: 'bed',
          rating: 5.1,
          title: 'bed', 
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRT9D-3aVWfmw4y7gwkeGHTqFGicvoqjAJoA&usqp=CAU',
          count: 20,
        },
        {
          id: 20,
          price: 22.3,
          description: 'this is awesome product',
          category: 'bed',
          rating: 4.1,
          title: 'Bed', 
    
          count: 1500,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMsA4pTkSPn6RaWmKt0NnysJ1pZ0wLD7vIQw&usqp=CAU'
        },
        {
          id: 21,
          price: 221.3,
          description: 'this is awesome product',
          title: 'Bed', 
    
          category: 'bed',
          rating: 4.1,
          count: 300,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpu6SyW2-YSLV3Pta6SyjgXsPKuoiqIhB74w&usqp=CAU'
        },
        {
          id: 22,
          price: 220.3,
          description: 'this is awesome product',
          category: 'bed',
          title: 'Bed class A1', 
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh9G2DfC7o3k4_y284a2QeGWB_wdJpYMTrNQ&usqp=CAU',
    
          rating: 4.1,
          count: 240,
        },
        {
          id: 23,
          price: 202.3,
          title: 'Bed', 
    
          description: 'this is awesome product',
          category: 'bed',
          rating: 4.1,
          count: 400,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkE2dr_Nyc0Iim_D2xhYfXoQNxkAGZ50n3ag&usqp=CAU'
        },
        {
          id: 24,
          title: 'Small Bed', 
          price: 232.3,
          description: 'this is awesome product',
          category: 'bed',
          rating: 4.1,
          count: 200,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfT-UoqqfE_Nn0ClRlsa4qAiEE3TSbuBLdoQ&usqp=CAU'
        },
        {
          id: 25,
          price: 100.3,
          description: 'this is awesome product',
          category: 'laptops',
          rating: 5.1,
          title: 'laptops', 
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsLpuJsBYmZjBy-iR76y-Inmnl499isPVP-Q&usqp=CAU',
          count: 20,
        },
        {
          id: 26,
          price: 22.3,
          description: 'this is awesome product',
          category: 'mchinery',
          rating: 4.1,
          title: 'Drons', 
    
          count: 1500,
          imageUrl: 'data:image/jpeg;base64,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'
        },
        {
          id: 27,
          price: 221.3,
          description: 'this is awesome product',
          title: 'robot', 
    
          category: 'mchinery',
          rating: 4.1,
          count: 300,
          imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEBUQEhMVFRAWFRYQFhUSEBUWFhUVFRUWFhUVFhcYHSggGB0lGxUVITIhKCktLjAwGB8zODMtNygtLisBCgoKDg0OFxAQGC0lHh0rLTcrLS0tLS0tLTc3Ky0rKysrLS0tLSsrKystKy03LSstLS0tLS0rKy0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUDBgcCAQj/xABHEAACAQICBQcJBgEKBwAAAAABAgADEQQFBhIhMUETMlFhcYGRByJCUnKCobHRFCOywcLhYhYkM0NTY4OSotIVNESTo+Lw/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAJhEBAQACAQMEAAcAAAAAAAAAAAECEQMSITEEE0FRBTJCcYGh0f/aAAwDAQACEQMRAD8A7jERAREQEREBERAREQIWa43kkvxJsPzM17C57inUOgXk22qXfVYrwbVWmbX3gXvYi9jsGHSet9orDDA+axNI9VNdtdu8WS/S6yYuG6/hKj2ud4kb6an2WB+ZWZFz+rxoN40/yqGYvsp6RPYwrdI8T9IGYaRdNF+5XP4VM9DSSlxSoO2m4/Eokf7M3V4yMcDW5blNc8mKeoKQC21y12qFr3JsFAGy3nb77AsxpNheLgdrKPzmann2GbdUHxPylW1J+gyNWw196X7VvCtkXNKB/rF79nzmVcbSO6on+cfWaW2Cp/2Sf9pb/KYmwydBHYzL8iJB0CJByWky0EVid1xckkA7QLnbuk6AiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAkPNsaKNFqhIHogkgDWbYN/WZMmk6fEVjToXOyrTKgWs1UXddYHeEC8pb+77oGHJ01neuek0Uv6qE67bfWqa23iEQy4V5CoIqKqKLKoCgdAAsB4CZg0qJatPYeRA89h4EsPGvIweC8DMzzC7zwzzE7wFR4wFDlKoX0ec3YPru75HqPL/IMNq09c732+6N35nwgWkREikREBERAREQEREBERAREQEREBERAREQEREBERAREQMWKrhEZzuAv9B4zk+iTYmtXxOMxHKLrVGWnSqAjUOzXIUnYbaibOKueM3zSrG2ApjaecR0kmyL3k/KUeFpaiBL3I3n1mJuzHrLEnvliJQaew0wBp91oEgNPoeYNafdaBI158LzBrz4XgZS8xM08F54Z4EjB0OUqKnA7T1Ab5uKgAWG7dKbRvC2Q1TvbYPZH1PyEupFIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgJ5qOFBY7AASewb56lDpZmlOlTWmzBTUJHWQiNUYD3UY9imBqObZzrY1KXpVNaoehTa1MHb7vayTPyz9Xh+80XNMUWLVN1So2vcb1RT5gB7QP8gm6ZTixXorVFrkWYDg42OLcNu0DoIlRIFZurw/eeuVbq8P3noUp6FOFeRVbq8I5RurwmQU45KQYTWbq8JjbEN1eEktSmF6UCK+Lfq8P3mB8bU6vD95JqUpHenKjo+U4lKlBHQWUqBboI2Fe4i0lzTdC8fqu1Bjsbz19oDaO8C/dNykUiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAnJdMMa2Ixb7wgHIU73Hm+bUq1OsG1MA/wVRxnSc9xWpSIHObzR2cT4fMTk2cV9ZnfpPJL1Iu+3b+oyxGv4+rrMSN24DoUCyjwAltoLmWpXOHY+bV2r1VFH6luO1VEpMTK9qrKwdTZlIZSN4ZTcHuIBgdrVJ7FORsjx64nD0662GutyB6LjY69zAjssZYhIGEU45OSQk+6kioGPzDCUFXlNc1SGIRfSCi+wkWHDjI2DrrWprUXcwvY7wRsIPYRMuf4GpUo/dFhVUh11W1dbpU7bbtu3iBIOQYbEozrVU8mwDgtUVtVuK84m3+0dMCTUpyLUpy2qU5Fq05RVglGDrsZSGB6wbidHy/FirSWoNzC9ug7iO43nP61OXWh+N1XagdzecvtAbR3gX7oG3RESBE495Q9I8wxOPbBZc9RUwyjlTSqLTLVG33ckbFFgADv19mzZrJybO359ar72OY/JjNTG3xGblJ5r9DEzDVxlJedURfadR8zPz02h2Ytz6iH28RUb9Jn1NBMR6T0R2a5/SJfby+k9zH7d4q6Q4JediqA7a9P6yJU0zyxd+Lo+7UDfK84ymhD8ayjspk/mJIp6G9Nfwpf+8vtZ/Se7h9uqv5QMrH/UX9mlVP6ZgbyjZfwao3ZSI/Fac7p6JUxvquexVH1kulovRHp1D3r/tl9nJPexbm3lIwno06x91B+qXWjukdPFg6qsjDbqta5W9ri3XOT5ngKaVEo0rmo2/Wa4FzZdw7SeoTf9AMtAL1/RA+z0yRvAINRu9go6ijdM52aunSXc23OIiRSIiAiIgIiICIiAiJGzGsUpO4G0DZYX27r92/ugalpbmF2YKd33S+0ecfn4CaDj2G4bgNUfmfG5lnneYg1CFN9XzRbbt4nt+glFVp4h+ZQrN7NCofkJUVuLaVGIebC2juY1ObhK/fRZfxWmP+QGcPuwjD2qtFfm8C18lWdBaz4Nz5tW9Wnf8AtFXz195Bf/DPTOqKs5Dl/kzztKiVUSlTqIy1FL4gWDKdYX1L3GyxHG9p2NFO5hZhsIBvY8Rfj2wPISfdSZQsEgbyB2kQrEUnhkmfXX1h3ET5bqY9lNj8hIIb05Fq05aGg53I3hb52nk4CqfQPeV+sChrU5DuyMHXYykMD1ibM2SVT6g7WP0mM6Msd9RR2KT9JUX2AxQq01qDcwv2HcR3G8rNM8/XAYGtijbWRbID6VRvNpr2axF+gXPCS8my3kEKa5a51t1gNnCc08omJ/4hmtDLBtw2F/neJ6C5HmofdYL2Vm6JFYdBcralhRUq3OIxBOJqlh5xL7VDdBsbkes7TYtSZbT7aemZamnmuO7tgKTE1OS9WeWWOtehCNOeCkmMkxlJqZMXFG1YdwqlmNlUFiegAXJkjk5rem2NKomGTbUrMNg36oIAHvNYdxlueptJhuo+RLUr1XxFru78hSB9d7L4KpVb9DMeE7RluDWjRSivNRQtzvJ4sesm5PWZovk9yILXaqTrJQRaKb7cqQWqMNvO+8fb0VFHozoc8b2EREBERAREQEREBERAREQPgAn2IgIiICYqmHRjcjbMsQMH2Ol6i96gzItJRuUDsAnuICIiAiIgIiIFZpLnNPBYSti6nNpIWtfnNuRB1sxA75zDyd5fUGHbG19uJxjnEux9RiTTHZ5zN2OBwkzyoYg4/MMNkqE8kv8APMWVO5F5qGx2bD41KZ4TaRSG4CwGwAbgOAEsujW0bVgLJPJRyc11HQjFZ8ImcrPGpLtm4sBEakz6kBJds9KOVHZOYVsdUxFevjaYJIK4bCgC/wB7VJp0T3AtUPQSOmbd5Rc15DCGmD95XvSFt4S16p8CF98Sw8nOQ6hpow/ohy9XrrvzVPTq2/8AGvTM5VrGab3o/lv2fDU6JOs4F3b1qjbXbxJsOAsOEsYiYaIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgJCznMqeGw9XE1TanSRqjdii9h1ncOsybOT+WjM2xFXD5LSJvVYYjEFfRooSVF929WbtROmCTar0Axh1a+ZVRr4zG1DUIHNp0VJ1F1u3gOATdNpweYVS4Lm4JsFAsNxP5Stw1NECooC01AAAHAbABK+vpAgrLqbVp7zvuW2EeEx1zenqvFnMdyN9oV0Y2B28AdhPZMxpSkdhUpCoh43BHYCD8plOkFmRNW5NtcngOmVymc/Us2pTzyUm6k8soG07uuOpu4IhpT5yci5jnuHpbC2u3q0yGPeb2E1DSzTp6eGfk0CO4NJGL3ZSwI1hssCBc9oE3JfLllcZ22o8Vihjs2eqT/NcINhPNPJk2PvVNZr8VSdV8neKSrhC67HNRy99972X/SFHaDONYZVw2XrSGytXIeoOKJqKyIej7tk2f3jTb/JJm3J1zh2Pm1Bsv6y7vp70jDr0REBERAREQEREBERAREQEREBERAREQEREBERAREQEREDBj8YlGk9aodWnTRqjk8FUEk+AnBtGsVUxNfE5rVFnxLkIDvSghsFvwHmqP8AD65tXl2z+1KjldNrVMSweqRtKUEbeRv2sL9YpsJoOOzHzBRp3SgihVHEhQANbpnm9Ry3GSY+a+l+H+mnJlc8vETdJ9JB/RUnN9zkCwK7bhT9PjeVtBha/Dqmt1H1nLDiTxmfD1WGwHfs6fhMY49M7uvJlc8u38OtaE48kNQO0W1l29p/+7ZOx9MA6wnM8iz80XU32qdh6v4p0A5rRr09dGG3eL7AegjhPRw5fD5/quOzLqnyV8a5tZm2dDEW8JQZniKt7sz1BwNRy1vGS3xIU7x4yFi8Wqr5zix6FFzPXJI8knV2QHxzcLSqF8XjVpNd6NENUqKLXZUsXUdJZtSn708ZnmKgFlFgNgubknheS8mIwuAaob/aMXfV6VoqbBj2ku3XdOic8uSZdo6XiuGtvGY4o1KrMSDtIuNxJJLFeosWI6BYcJJynFNSqpUU2KsGv2SopGTqEwP0jl2LWtSSqu5lDdh4juNxJM0byWZpr0Gw5PnJ5y+ydh8NniZvMBERAREQEREBERAREQEREBERARKLO8uxtU/c4oU14KKRB73uT4ATVsdo5mvpPy3ZiG+T2EukdArYqmnPdV9pgPnINbSLBrvrp7p1vw3nMsRlGLp8/D1R1hCw8VuJXvVINjYHoYEGXpTbpuI03wa7jUf2KLfnaVtfyi0RzKLn2nRPgTNC12PHwtA1uua6YnVW31/KFXPMooB/EXf4qLSur6cY47nROpaa/rN5Q8iDwHgJ95HrI94/KNRN1OraQ4199er2K2r+EGV1fEu213Yn+J2PzIn04cdN+1V+l585BuB8NYfJvylEWrTDnWYBmtqhiAxA6L2bZvmGpgqR3oB3W+kmPQboH+YH5qJ45M9g8PwtJccb5jWPJnj+W2Kk5BhzuVh2VCfzaeRkCDc7jqIFur0RLyjhmc2UF/YBc+GqZY4bRnFvzaFS3WnJ/FiszcML5jWPLyTxa0+pkt9zqegFN3eGM9UcnZfSsdx1dbzvETeMVofj1TWGHaofUWvS1v8AW4HxmrZsMxoHblWI9rULjxpBh8ZzvFx/DtPVcvz3/eK6rlr7tZur7xfGeDlVTaCWsLnal/EyuxGl+IDapRKbeq6trDuYj5R/xjFttZ2Ub9iBRbttM3i+sq3PV35wn9/6xDAHE4qlhEbYxu7AW1Vtd22+qgPebSZn+YrVxDFNlJAKNNRuCJ5ot4Tb9CMmqYjXCPeq6NTV6hZwoIBdztvq3VBvFzcSJiPI1mqcyphqgH97UU+Bp2+M3MdTThnn15bajSeWGHaTcR5Oc5pn/lS46adaiw8C4PwkV8izGlz8JiR1/ZnYeKgiVltmg+Z8hiUcnzSdVuw/sT32nbxPzVgsW1NwH8w39JSp6jt7p3zRHMOXwqNxX7s9wFvgRAuYiICIiAiIgIiICIiAiIgIiICIiAmOtQRxZ1Vh0MoI+M+RArMTotgX30EHsXT8BEq8RoDhTzHqp2OCP9QJ+MRLs0rMR5P6o/o8QrdT0yvxBPykH+RGPvb7n2uVa34L/CIjdTUTKGgFc8+ui+yjP8SVlhR8n9D061Vj/DqKPipPxiI3TUWFDQzAr/Vlj/HVc/C9vhLLD5Jhae1KFJT0ikt/G14iRU4C2wbp9iICIiBhxGFp1BaoiuOh1DDwMwYLKMNRJNKjTplhY8nTVbjosBEQJFLDopJVVUneVUC9um2+ZYiAiIgeXQEWIBHQReeaNBEFkVVF72VQBfpsIiBkiIgIiICIiB//2Q=='
        },
        {
          id: 28,
          price: 220.3,
          description: 'this is awesome product',
          category: 'mchinery',
          title: 'robot class A1', 
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvAAE4SoTDgQEMO7C3PK2z8MoWohw0RqO_FQ&usqp=CAU',
    
          rating: 4.1,
          count: 240,
        },
        {
          id: 29,
          price: 202.3,
          title: 'small robot', 
    
          description: 'this is awesome product',
          category: 'mchinery',
          rating: 4.1,
          count: 400,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPpK51eSzO9P1TfpYdMkCpP7Xxhb0E3m01aA&usqp=CAU'
        },
        {
          id: 30,
          title: 'Arm robotic', 
          price: 232.3,
          description: 'this is awesome product',
          category: 'mchinery',
          rating: 4.1,
          count: 200,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYw07XE6bOlNDSHnTleboCrWGEKkdFzmeQxQ&usqp=CAU'
        },
        {
          id: 31,
          price: 212.3,
          description: 'this is awesome product',
          category: 'lights',
          rating: 4.1,
          title: 'Stripped lights', 
    
          count: 200,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9awOyMgfhOnY5rLMeKPZi-NV0kwaeqD37Tg&usqp=CAU'
        },
        {
          id: 32,
          price: 22.3,
          description: 'this is awesome product',
          category: 'lights',
          rating: 4.1,
          title: 'Stripped lights', 
          count: 1500,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OPozocSeFVaiiWEgcWL-LGrV8XHo2QdDlQ&usqp=CAU'
        },
        {
          id: 33,
          price: 221.3,
          description: 'this is awesome product',
          title: 'Stripped lights', 
          category: 'lights',
          rating: 4.1,
          count: 300,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAZCoJDfYzgtVAzqytgsVVP9T-t1P6rvD44g&usqp=CAU'
        },
        {
          id: 34,
          price: 220.3,
          description: 'this is awesome product',
          category: 'lights',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmkCLjprFGdN2AFRDUYhdmttI9tv2nIa3Pww&usqp=CAU',
          title: 'Stripped lights', 
    
          rating: 4.1,
          count: 240,
        },
        {
          id: 35,
          price: 202.3,
          title: 'Stripped lights', 
          description: 'this is awesome product',
          category: 'lights',
          rating: 4.1,
          count: 400,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlvXsOHDO3dymPhpoPatWsO4lSnf3y8lHbcg&usqp=CAU'
        },
        {
          id: 36,
          price: 232.3,
          description: 'this is awesome product',
          category: 'lights',
          rating: 4.1,
          title: 'Stripped lights', 
          count: 200,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-zfBYxQRorpGogurIfY6jomt063FC_nfsw&usqp=CAU'
        },
      
        {
          id: 37,
          price: 212.3,
          description: 'this is awesome product',
          category: 'mchinery',
          rating: 4.1,
          title: 'Mr/ Robot', 
    
          count: 200,
          imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJvYm90aWNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
        },
        {
          id: 38,
          price: 22.3,
          description: 'this is awesome product',
          category: 'mchinery',
          rating: 4.1,
          title: 'Drons', 
    
          count: 1500,
          imageUrl: 'https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJvYm90aWNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
        },
        {
          id: 39,
          price: 221.3,
          description: 'this is awesome product',
          title: 'robot', 
    
          category: 'mchinery',
          rating: 4.1,
          count: 300,
          imageUrl: 'https://media.istockphoto.com/photos/autonomous-robot-transportation-in-warehouses-warehouse-automation-picture-id1302200961?b=1&k=20&m=1302200961&s=170667a&w=0&h=FoJQByOVploJypg3hAWuNEgWuFmfDawHbarFC7YHJdA='
        },
        {
          id: 40,
          price: 220.3,
          description: 'this is awesome product',
          category: 'mchinery',
          title: 'robot class A1', 
          imageUrl: 'https://media.istockphoto.com/photos/autonomous-robot-transportation-in-warehouses-warehouse-automation-picture-id1302200961?b=1&k=20&m=1302200961&s=170667a&w=0&h=FoJQByOVploJypg3hAWuNEgWuFmfDawHbarFC7YHJdA=',
    
          rating: 4.1,
          count: 240,
        },
        {
          id: 41,
          price: 202.3,
          title: 'small robot', 
    
          description: 'this is awesome product',
          category: 'mchinery',
          rating: 4.1,
          count: 400,
          imageUrl: 'https://images.unsplash.com/photo-1558137623-ce933996c730?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJvYm90aWNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
        },
        {
          id: 42,
          title: 'Arm robotic', 
          price: 232.3,
          description: 'this is awesome product',
          category: 'mchinery',
          rating: 4.1,
          count: 200,
          imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJvYm90aWNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
        }
      ,
      
        {
          id: 43,
          price: 212.3,
          description: 'this is awesome product',
          category: 'mchinery',
          rating: 4.1,
          title: 'Mr/ Robot', 
    
          count: 200,
          imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJvYm90aWNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
        },
        {
          id: 44,
          price: 22.3,
          description: 'this is awesome product',
          category: 'mchinery',
          rating: 4.1,
          title: 'Drons', 
    
          count: 1500,
          imageUrl: 'https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJvYm90aWNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
        },
        {
          id: 45,
          price: 221.3,
          description: 'this is awesome product',
          title: 'robot', 
    
          category: 'mchinery',
          rating: 4.1,
          count: 300,
          imageUrl: 'https://media.istockphoto.com/photos/autonomous-robot-transportation-in-warehouses-warehouse-automation-picture-id1302200961?b=1&k=20&m=1302200961&s=170667a&w=0&h=FoJQByOVploJypg3hAWuNEgWuFmfDawHbarFC7YHJdA='
        },
        {
          id: 46,
          price: 220.3,
          description: 'this is awesome product',
          category: 'mchinery',
          title: 'robot class A1', 
          imageUrl: 'https://media.istockphoto.com/photos/autonomous-robot-transportation-in-warehouses-warehouse-automation-picture-id1302200961?b=1&k=20&m=1302200961&s=170667a&w=0&h=FoJQByOVploJypg3hAWuNEgWuFmfDawHbarFC7YHJdA=',
    
          rating: 4.1,
          count: 240,
        },
        {
          id: 47,
          price: 202.3,
          title: 'small robot', 
    
          description: 'this is awesome product',
          category: 'mchinery',
          rating: 4.1,
          count: 400,
          imageUrl: 'https://images.unsplash.com/photo-1558137623-ce933996c730?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJvYm90aWNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
        },
        {
          id: 48,
          title: 'Arm robotic', 
          price: 232.3,
          description: 'this is awesome product',
          category: 'mchinery',
          rating: 4.1,
          count: 200,
          imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJvYm90aWNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
        },
        {
          id: 49,
          price: 212.3,
          description: 'this is awesome product',
          category: 'mchinery',
          rating: 4.1,
          title: 'Mr/ Robot', 
    
          count: 200,
          imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJvYm90aWNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
        },
        {
          id: 50,
          price: 22.3,
          description: 'this is awesome product',
          category: 'mchinery',
          rating: 4.1,
          title: 'Drons', 
    
          count: 1500,
          imageUrl: 'https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJvYm90aWNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
        },
        {
          id: 51,
          price: 221.3,
          description: 'this is awesome product',
          title: 'robot', 
    
          category: 'mchinery',
          rating: 4.1,
          count: 300,
          imageUrl: 'https://media.istockphoto.com/photos/autonomous-robot-transportation-in-warehouses-warehouse-automation-picture-id1302200961?b=1&k=20&m=1302200961&s=170667a&w=0&h=FoJQByOVploJypg3hAWuNEgWuFmfDawHbarFC7YHJdA='
        },
        {
          id: 52,
          price: 220.3,
          description: 'this is awesome product',
          category: 'mchinery',
          title: 'robot class A1', 
          imageUrl: 'https://media.istockphoto.com/photos/autonomous-robot-transportation-in-warehouses-warehouse-automation-picture-id1302200961?b=1&k=20&m=1302200961&s=170667a&w=0&h=FoJQByOVploJypg3hAWuNEgWuFmfDawHbarFC7YHJdA=',
    
          rating: 4.1,
          count: 240,
        },
        {
          id: 53,
          price: 202.3,
          title: 'small robot', 
    
          description: 'this is awesome product',
          category: 'mchinery',
          rating: 4.1,
          count: 400,
          imageUrl: 'https://images.unsplash.com/photo-1558137623-ce933996c730?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJvYm90aWNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
        },
        {
          id: 54,
          title: 'Arm robotic', 
          price: 232.3,
          description: 'this is awesome product',
          category: 'mchinery',
          rating: 4.1,
          count: 200,
          imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJvYm90aWNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
        },
        {
          id: 55,
          price: 212.3,
          description: 'this is awesome product',
          category: 'phones',
          rating: 4.1,
          title: 'Iphone', 
    
          count: 600,
          imageUrl: 'assets/sections/images/phone_prod01.jpeg'
        },
        {
          id: 56,
          price: 212.3,
          description: 'this is awesome product',
          category: 'phones',
          rating: 4.1,
          title: 'Iphone', 
    
          count: 600,
          imageUrl: 'assets/sections/images/phone_prod02.jpeg'
          
        },
        {
          id: 57,
          price: 212.3,
          description: 'this is awesome product',
          category: 'phones',
          rating: 4.1,
          title: 'Iphone', 
    
          count: 600,
          imageUrl: 'assets/sections/images/phone_prod03.jpeg'
        },
        {
          id: 58,
          price: 212.3,
          description: 'this is awesome product',
          category: 'phones',
          rating: 4.1,
          title: 'Iphone', 
    
          count: 600,
          imageUrl: 'assets/sections/images/phone_prod04.jpeg'
        },
        {
          id: 59,
          price: 212.3,
          description: 'this is awesome product',
          category: 'phones',
          rating: 4.1,
          title: 'Iphone', 
    
          count: 600,
          imageUrl: 'assets/sections/images/phone_prod05.jpeg'
        },
        {
          id: 60,
          price: 212.3,
          description: 'this is awesome product',
          category: 'phones',
          rating: 4.1,
          title: 'Iphone', 
    
          count: 600,
          imageUrl: 'assets/sections/images/phone_prod06.jpeg'
        },
        {
          id: 61,
          price: 100.3,
          description: 'this is awesome product',
          category: 'laptops',
          rating: 5.1,
          title: 'laptops', 
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsLpuJsBYmZjBy-iR76y-Inmnl499isPVP-Q&usqp=CAU',
          count: 20,
        },
        {
          id: 62,
          price: 22.3,
          description: 'this is awesome product',
          category: 'laptops',
          rating: 4.1,
          title: 'taplet', 
    
          count: 1500,
          imageUrl: 'data:image/jpeg;base64,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'
        },
        {
          id: 63,
          price: 221.3,
          description: 'this is awesome product',
          title: 'taplet', 
    
          category: 'laptops',
          rating: 4.1,
          count: 300,
          imageUrl: 'data:image/jpeg;base64,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'
        },
        {
          id: 64,
          price: 220.3,
          description: 'this is awesome product',
          category: 'laptops',
          title: ' taplet', 
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvAAE4SoTDgQEMO7C3PK2z8MoWohw0RqO_FQ&usqp=CAU',
    
          rating: 4.1,
          count: 240,
        },
        {
          id: 65,
          price: 202.3,
          title: ' laptop', 
    
          description: 'this is awesome product',
          category: 'laptops',
          rating: 4.1,
          count: 400,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPpK51eSzO9P1TfpYdMkCpP7Xxhb0E3m01aA&usqp=CAU'
        },
        {
          id: 66,
          title: 'computer and tablet', 
          price: 232.3,
          description: 'this is awesome product',
          category: 'laptops',
          rating: 4.1,
          count: 200,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYw07XE6bOlNDSHnTleboCrWGEKkdFzmeQxQ&usqp=CAU'
        },

        {
          id: 67,
          price: 212.3,
          description: 'this is awesome product',
          category: 'lights',
          rating: 4.1,
          title: 'Stripped lights', 
    
          count: 200,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9awOyMgfhOnY5rLMeKPZi-NV0kwaeqD37Tg&usqp=CAU'
        },
        {
          id: 68,
          price: 22.3,
          description: 'this is awesome product',
          category: 'lights',
          rating: 4.1,
          title: 'Stripped lights', 
          count: 1500,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OPozocSeFVaiiWEgcWL-LGrV8XHo2QdDlQ&usqp=CAU'
        },
        {
          id: 69,
          price: 221.3,
          description: 'this is awesome product',
          title: 'Stripped lights', 
          category: 'lights',
          rating: 4.1,
          count: 300,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAZCoJDfYzgtVAzqytgsVVP9T-t1P6rvD44g&usqp=CAU'
        },
        {
          id: 70,
          price: 220.3,
          description: 'this is awesome product',
          category: 'lights',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmkCLjprFGdN2AFRDUYhdmttI9tv2nIa3Pww&usqp=CAU',
          title: 'Stripped lights', 
    
          rating: 4.1,
          count: 240,
        },
        {
          id: 71,
          price: 202.3,
          title: 'Stripped lights', 
          description: 'this is awesome product',
          category: 'lights',
          rating: 4.1,
          count: 400,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlvXsOHDO3dymPhpoPatWsO4lSnf3y8lHbcg&usqp=CAU'
        },
        {
          id: 72,
          price: 232.3,
          description: 'this is awesome product',
          category: 'lights',
          rating: 4.1,
          title: 'Stripped lights', 
          count: 200,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-zfBYxQRorpGogurIfY6jomt063FC_nfsw&usqp=CAU'
        },
        {
          id: 73,
          price: 3000.3,
          description: 'this is awesome product',
          category: 'electric car',
          rating: 7,
          title: 'Tesla car', 
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_z-i5cE9iAHgBPKnOnr6bjfkhSRbGNLMGA&usqp=CAU',
          count: 20,
        },
        {
          id: 74,
          price: 3000.3,
          description: 'this is awesome product',
          category: 'electric car',
          rating: 7,
          title: 'Tesla car', 
          count: 1500,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjg2nMahfRphS0eyXUiGOZNbKC2UGodN5u-Q&usqp=CAU'
        },
        {
          id: 75,
          price: 3000.3,
          description: 'this is awesome product',
          category: 'electric car',
          rating: 7,
          title: 'Tesla car', 
          count: 300,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3rvQu8FmagF2INF5WyWjxlRUAw0bAFNJVlw&usqp=CAU'
        },
        {
          id: 76,
          price: 3000.3,
          description: 'this is awesome product',
          category: 'electric car',
          rating: 7,
          title: 'Tesla car',  
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ55yxcfnT1euaRax-5BKE6sBA24Ja1VK47Q&usqp=CAU',
    
          
          count: 240,
        },
        {
          id: 77,
          price: 3000.3,
          description: 'this is awesome product',
          category: 'electric car',
          rating: 7,
          title: 'Tesla car', 
          count: 400,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHn21xrvf0sCnLosRhZggwJ8a19q-YdB7X_g&usqp=CAU'
        },
        {
          id: 78,
          price: 3000.3,
          description: 'this is awesome product',
          category: 'electric car',
          rating: 7,
          title: 'Tesla car', 
          count: 200,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvslLsRKAhRCOCLizhhEsnFPNhl5ypT-Atg&usqp=CAU'
        },
        {
          id: 79,
          price: 10.3,
          description: 'this is awesome product',
          category: 'game',
          rating: 4.1,
          title: 'game', 
    
          count: 600,
          imageUrl: 'data:image/jpeg;base64,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'
        },
        {
          id: 80,
          price: 21.3,
          description: 'this is awesome product',
          category: 'game',
          rating: 4.1,
          title: 'game', 
    
          count: 600,
          imageUrl: 'data:image/jpeg;base64,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'
          
        },
        {
          id: 81,
          price: 22.3,
          description: 'this is awesome product',
          category: 'game',
          rating: 4.1,
          title: 'game', 
    
          count: 600,
          imageUrl: 'data:image/jpeg;base64,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'
        },
        {
          id: 82,
          price: 12.3,
          description: 'this is awesome product',
          category: 'game',
          rating: 4.1,
          title: 'game', 
    
          count: 600,
          imageUrl: 'data:image/jpeg;base64,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'
        },
        {
          id: 83,
          price: 12.3,
          description: 'this is awesome product',
          category: 'game',
          rating: 4.1,
          title: 'game', 
    
          count: 600,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4sN1MbINBWOOJR-tsofNpre2CbEfAW003CQ&usqp=CAU'
        },
        {
          id: 84,
          price: 12.3,
          description: 'this is awesome product',
          category: 'game',
          rating: 4.1,
          title: 'game arm', 
    
          count: 600,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwOL7OSQRTqIixjN6bHZjcAht2HXd7v2XLFg&usqp=CAU'
        },
        {
          id: 85,
          price: 212.3,
          description: 'this is awesome product',
          category: 'baby',
          rating: 4.1,
          title: 'baby product', 
    
          count: 600,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSUYQckUN_MK_VtzXAaoHFKv67lu-leSF9g&usqp=CAU'
        },
        {
          id: 86,
          price: 212.3,
          description: 'this is awesome product',
          category: 'baby',
          rating: 4.1,
          title: 'baby', 
    
          count: 600,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8QwT3IHft0btNGjRt17gCKvY11lp-hicwEQ&usqp=CAU'
          
        },
        {
          id: 87,
          price: 212.3,
          description: 'this is awesome product',
          category: 'baby',
          rating: 4.1,
          title: 'Milk', 
    
          count: 600,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIweGu_wiVCHawwtwO1djbEXhrxx2bUIXWDg&usqp=CAUq'
        },
        {
          id: 88,
          price: 212.3,
          description: 'this is awesome product',
          category: 'baby',
          rating: 4.1,
          title: 'winter stroll', 
    
          count: 600,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzLV2lSaD5XkPQrkwoB0lN2fxaCsHTj3sflQ&usqp=CAU'
        },
        {
          id: 89,
          price: 212.3,
          description: 'this is awesome product',
          category: 'baby',
          rating: 4.1,
          title: 'Baby milk', 
    
          count: 600,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR151yqT-uf8gZ9cuca6kJwxy5uRoIMRP-UJw&usqp=CAU'
        },
        {
          id: 90,
          price: 212.3,
          description: 'this is awesome product',
          category: 'baby',
          rating: 4.1,
          title: 'baby product'  , 
    
          count: 600,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8QwT3IHft0btNGjRt17gCKvY11lp-hicwEQ&usqp=CAU'
        }
    ]

  // getProductById(id:number):Product {
  //   return this.getAll().find(product => product.id == id)!
  // }


  getBeautyData() {
    return this.products.filter(product => product.category == 'beauty')
   }
   
   getDealsProducts() {
     return  this.products.filter(product  => product.category == 'deals')
   }

   getMachinaryProducts() {
    return this.products.filter(product  => product.category == 'mchinery')
  }
  
  getAutombiliesProducts () {
    return this.products.filter(product  => product.category == 'automobiles')
  }

  getTopPhones() {
    return this.products.filter(product  => product.category == 'phones')
  }

  getlaptopAndTaplets() {
    return  this.products.filter(product  => product.category == 'laptops')
  }
  getLights() {
    return  this.products.filter(product  => product.category == 'lights')
  }
  getBeds() {
    return  this.products.filter(product  => product.category == 'bed')
  }
  getElectricCars() {
    return  this.products.filter(product  => product.category == 'electric car')
  }
  getVideoGames() {
    return  this.products.filter(product  => product.category == 'game')
  } 
  getBabyProducts() {
    return  this.products.filter(product  => product.category == 'baby')
  }
  
 
  getSingleProduct( productId:any) {
    return this.products.find(productId)
  }

  getAllBySearchTerm(searchTerm:string):Product[] {
    return this.products.filter(product => {
       product.title?.toLowerCase().includes(searchTerm.toLowerCase());
    
  });
}
cartItems:any
addToCart(cartItem:any) {
  let addDefaultQuantity = Object.assign({}, cartItem, { 'quantity': 1, 'totalPrice': 0 })
 this.isProductExist = this.cartList.find(item => item.id === addDefaultQuantity.id)
  if(!this.isProductExist) {
      this.cartList.push(addDefaultQuantity)
      this.storedProducts()
      console.log(this.cartList)
  }
  this.cartItems = this.cartList.length
  this.storedProducts()
}
removeFromCart(i:number) {
  this.cartList.splice(i, 1)
  this.storedProducts()
}

cartLists:any
increseAmountOfProduct(i:number) {
  this.cartList[i]
  this.storedProducts()
}

decreaseAmountOfProduct(i:number) {
  this.cartList[i]
  this.storedProducts()
}
storedProducts() {
  localStorage.setItem('cartList', JSON.stringify(this.cartList))
}
}

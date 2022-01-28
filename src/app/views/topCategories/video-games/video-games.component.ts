import { CategoryService } from 'src/app/services/category.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-video-games',
  templateUrl: './video-games.component.html',
  styleUrls: ['./video-games.component.css']
})
export class VideoGamesComponent implements OnInit {

  phones!:any
  constructor(private categoryService: CategoryService) { }
 
  getVideoGames() {
    return this.phones =  this.categoryService.getVideoGames()
  }

  ngOnInit(): void {
    this.getVideoGames()
  }

}

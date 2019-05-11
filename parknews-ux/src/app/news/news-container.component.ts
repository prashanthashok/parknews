import { Component, OnInit } from '@angular/core';
import { News } from '../shared/models/news';

@Component({
  selector: 'park-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.css']
})
export class NewsContainerComponent implements OnInit {

  newsItem: News;


  constructor() { }

  ngOnInit() {
  }

  readMore(newsItem: News){
    console.log("Inside parent");
    console.log(newsItem);
    console.log("End parent");
    this.newsItem = newsItem;
  }
}

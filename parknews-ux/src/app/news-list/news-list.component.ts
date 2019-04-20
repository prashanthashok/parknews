import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../shared/apis/news-api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { News } from '../shared/models/news';

@Component({
  selector: 'park-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  constructor(private newsApi: NewsApiService) { }

  newsList: News[];
  news$;

  ngOnInit() {

    this.newsApi.getNews().subscribe(
      news => {
        this.newsList = news['articles'];
        console.log(news);
        console.log(this.newsList);
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      }
    );
  }

}

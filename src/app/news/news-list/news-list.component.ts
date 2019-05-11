import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NewsApiService } from '../../shared/apis/news-api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { News } from '../../shared/models/news';

@Component({
  selector: 'park-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  constructor(private newsApi: NewsApiService) { }

  newsList: News[];
  news$;

  @Output() newsSelected = new EventEmitter<News>();

  ngOnInit() {

    this.newsApi.getNews().subscribe(
      news => {
        this.newsList = news['articles'];
        this.newsList.forEach((item, i) => {
          item.id = i + 1;
        })
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

  readMore(newsItem: News) {
    console.log(newsItem);
    this.newsSelected.emit(newsItem);
  }

}

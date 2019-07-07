import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { News } from 'src/app/shared/models/news';
import { NewsApiService } from 'src/app/shared/apis/news-api.service';

@Component({
  selector: 'park-news-cards',
  templateUrl: './news-cards.component.html',
  styleUrls: ['./news-cards.component.css']
})
export class NewsCardsComponent implements OnInit {

  constructor(private newsApi: NewsApiService) { }

  newsList: News[];
  news$;

  

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

}

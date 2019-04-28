import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/app/shared/models/news';

@Component({
  selector: 'park-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  @Input() newsItem: News;

  constructor() { }

  ngOnInit() {
  }

}

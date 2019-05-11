import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from '../models/news';

const url = 'https://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'apiKey=1a142cc836c74a2182dbabf538bac6aa';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  

  constructor(private http: HttpClient) { }

  getNews(){
    return this.http.get<News[]>(url);
  }
}

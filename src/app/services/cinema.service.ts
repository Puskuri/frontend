import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { parseString } from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  url!: string;
  newsCount: number = 0;

  testData = [{ 'Title': 'Ensi-ilta: PalmSprings', 'PublishDate': '2020-11-24T00:00:00', 'HTMLLead': '', 'ImageURL': 'http://media.finnkino.fi/1012/news/6124/PalmSprings_550.jpg' },
  { 'Title': 'Ensi-ilta: Karjamäenjoulu', 'PublishDate': '2020-11-24T00:00:00', 'HTMLLead': '', 'ImageURL': 'http://media.finnkino.fi/1012/news/6123/JulPaKutoppen_550.jpg' }];
  newsData = this.testData;

  constructor(private httpClient: HttpClient) {
    this.url = 'https://www.finnkino.fi/xml/News/';
  }

  getData1(): Observable<any> {
    return of(this.testData)
  }

  getData(): Observable<any> {
    return this.httpClient.get(this.url, { responseType: 'text' })
      .pipe(map(response => {

        let newsData: any;

        parseString(response, { trim: true, explicitArray: false, mergeAttrs: true },
          function (err: any, result: any) {
            newsData = result.News.NewsArticle;
          });

        this.newsCount = newsData.lenght;

        return newsData;
      }));
  }



}

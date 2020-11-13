import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient} from '@angular/common/http';

import {Article} from "../article.model";
import {ArticleService} from "../article.service"
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
 
  articles: Article[] = [];
  isLoading = false;
  private articleSub: Subscription;
 // article = {} as Article;


   article = <Article>({});

  constructor(public articleService: ArticleService, private http:HttpClient,private router: Router) {}

  async ngOnInit() {
   // this.isLoading = true;
  this.getArt();
   // this.articleSub = this.articleService.getPostUpdateListener()
  //    .subscribe((article: Article[]) => {
   //     this.isLoading = false;
  //      this.articles = article;
  //      console.log(this.articles);
   //   });
 
  }

  onDelete(postId: string) {
    console.log("in component");
    this.http
      .delete("http://localhost:8000/api/articles/" + postId)
      .subscribe((response) => {
        
       console.log(response)
       this.router.navigate(["/"]);
      });
  }

  getArt():any{
    this.http.get<any>("http://localhost:8000/api/articles")
    
    
    .subscribe(data => {
      
      const fofo = JSON.parse(JSON.stringify(data));
      this.articles = fofo;  
      console.log(this.articles);    
           
    // fofo.forEach(element => {
    // //   console.log(element)
    //   this.article = element.title;
    //   // this.article.body = element.body;
    //   this.articles.push(this.article);

     
    // });
 
   
   })
  }


  // ngOnDestroy() {
  //   this.articleSub.unsubscribe();
  // }
}


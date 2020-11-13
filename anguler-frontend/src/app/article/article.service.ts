import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { Article } from "./article.model";

@Injectable({ providedIn: "root" })
export class ArticleService {
  private posts: Article[] = [];
  article = {} ;
  articles: Article[] = [];
  private postsUpdated = new Subject<Article[]>();

  constructor(private http: HttpClient, private router: Router) {}

  // getArticles() {
  //   this.http
  //     .get<{ message: string; posts: any }>("http://localhost:8000/api/articles")
  //     .pipe(
  //       map(postData => {
  //         return postData.posts.map(post => {
  //           return {
  //             title: post.title,
  //             content: post.body,
  //             id: post.id,
  //            // imagePath: post.imagePath
  //           };
  //         });
  //       })
  //     )
  //     .subscribe(transformedPosts => {
  //       this.posts = transformedPosts;
  //       this.postsUpdated.next([...this.posts]);
  //     });
  // }



  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  getPost(id: string) {
    return this.http.get<{ id: string, title: string, body: string  }>(
      "http://localhost:8000/api/articles/" + id
    );
  }

  addArticle(title: string, body: string, user_id: string) {
    const postData = new FormData();
    postData.append("title", title);
    postData.append("body", body);
    postData.append("user_id", user_id);
    this.http
      .post<{ message: string; post: Article }>(
        "http://localhost:8000/api/articles",
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
        // const post: Article = {
        //   id: responseData.post.id,
        //   title: title,
        //   : body,
        // //  imagePath: responseData.post.imagePath
        // };
        // this.posts.push(post);
        // this.postsUpdated.next([...this.posts]);
        this.router.navigate(["/"]);
      });
  }

  // updatePost(id: string, title: string, content: string, image: File | string) {
  //   let postData: Post | FormData;
  //   if (typeof image === "object") {
  //     postData = new FormData();
  //     postData.append("id", id);
  //     postData.append("title", title);
  //     postData.append("content", content);
  //     postData.append("image", image, title);
  //   } else {
  //     postData = {
  //       id: id,
  //       title: title,
  //       content: content,
  //       imagePath: image
  //     };
  //   }
  //   this.http
  //     .put("http://localhost:3000/api/posts/" + id, postData)
  //     .subscribe(response => {
  //       const updatedPosts = [...this.posts];
  //       const oldPostIndex = updatedPosts.findIndex(p => p.id === id);
  //       const post: Post = {
  //         id: id,
  //         title: title,
  //         content: content,
  //         imagePath: ""
  //       };
  //       updatedPosts[oldPostIndex] = post;
  //       this.posts = updatedPosts;
  //       this.postsUpdated.next([...this.posts]);
  //       this.router.navigate(["/"]);
  //     });
  // }

  deleteArticle(postId: string) {
    this.http
      .delete("http://localhost:8000/api/articles/" + postId)
      .subscribe((response) => {
        
       console.log(response)
      });
  }
}

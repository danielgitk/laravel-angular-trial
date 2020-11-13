import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Article } from '../article.model';
import { ArticleService } from '../article.service';


@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {
  enteredTitle = "";
  enteredBody = "";
  private mode = 'create';
  isLoading = false;
  form: FormGroup;
 // imagePreview: string;
  private articleId: string;
   article : Article;


  constructor(public articleService:ArticleService,public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.form= new FormGroup({
      title : new FormControl(null,{validators: [Validators.required, Validators.minLength(3)]
      }),
      body : new FormControl(null, {validators: [Validators.required]}),
     // image : new FormControl(null, {validators: [Validators.required], asyncValidators: [mimeType]})
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("article")) {
        this.mode = "edit";
        this.articleId = paramMap.get("article");
        this.isLoading = true;
        this.articleService.getPost(this.articleId).subscribe(postData => {
          this.isLoading = false;
          this.article = {
            id: postData.id,
            title: postData.title,
            body: postData.body,
            user_id: 0,
            created_at:Date(),
            updated_at:Date()            
          };
          this.form.setValue({
            title: this.article.title,
            body: this.article.body,
           
          });
        });
      } else {
        this.mode = "create";
        this.articleId = null;
      }
    });
  }

  onSavePost(){
    if (this.form.invalid  ){
      return
    }
    this.isLoading = true;
    if (this.mode === 'create'){
      this.articleService.addArticle(this.form.value.title, this.form.value.body,"67");
    }else{
     // this.articleService.updateArticle(this.postId, this.form.value.title, this.form.value.content,this.form.value.image);
    }


  //  this.form.reset();

   }

}



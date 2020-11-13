import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArticleService } from 'src/app/article/article.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public articleService:ArticleService) { }

  ngOnInit(): void {
  }
  isLoading= false;

  onsignup(form: NgForm){
    console.log("signup clikked");
    if(form.invalid){
      return;
    }
    this.isLoading = true;
    
    // this.articleService.createUser(form.value.email, form.value.password);
    //   console.log("after auth called");
    
  }

}

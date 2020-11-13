import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleCreateComponent } from './article/article-create/article-create.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  {path: '', component: ArticleListComponent},
  {path: 'create', component:ArticleCreateComponent},
 { path: 'signup', component:SignupComponent},
  {path: 'login', component:LoginComponent},
  {path: 'edit/:article', component: ArticleCreateComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

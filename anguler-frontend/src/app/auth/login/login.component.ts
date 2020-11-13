import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading =  false;

  constructor() { }
  // onLogin(form: NgForm){
  //   if (form.invalid){
  //     return
  //   }
  //   this.isLoading = true;
  //   this.authService.login(form.value.email, form.value.password);
     
  //  }
 

  ngOnInit(): void {
  }

}

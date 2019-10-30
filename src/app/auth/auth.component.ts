import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLogginMode = true;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onSwitchMode() {
    this.isLogginMode = !this.isLogginMode;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    if (this.isLogginMode) {
      // TODO
    } else {
      this.authService.signup(email, password).subscribe(
        resData => {
          console.log(resData);
        },
        error => {
          console.log(error);
        }
      );
    }
    form.reset();
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'common';

  ngOnInit() {
    console.log('Check login');
    let token = localStorage.getItem('token');
    if (token) {
      window.location.replace('http://localhost:5000/agent');
    }
  }

  
  login() {
    console.log('Login process!!');
    let randomNum = Math.random() + 100;
    localStorage.setItem('token', randomNum.toString());
    window.location.replace('http://localhost:5000/agent');
  }
}

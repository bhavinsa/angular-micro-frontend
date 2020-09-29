import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agent';
  constructor(private router: Router) { }
  ngOnInit() {
    let token = localStorage.getItem('token');
    if (token) {
      console.log('verify the token with Backend');
      this.router.navigate(['/home']);
    } else {
      window.location.replace('http://localhost:5000');
    }
  }

  logout() {
    localStorage.setItem('token', '');
    window.location.replace('http://localhost:5000');
  }
}

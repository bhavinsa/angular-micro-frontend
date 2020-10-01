import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) { }
  title = 'customer edited';


  product() {
    this.router.navigate(['/product']);
  }

  productDetail() {
    this.router.navigate(['/product-details']);
  }

  home() {
    window.location.replace('http://localhost:5000/agent/#/home');
  }

  about() {
    window.location.replace('http://localhost:5000/agent/#/about');
  }

  logout() {
    localStorage.setItem('token', '');
    window.location.replace('http://localhost:5000');
  }

}

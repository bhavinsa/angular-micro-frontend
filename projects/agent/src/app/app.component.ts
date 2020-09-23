import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agent';

  ngOnInit(){
    let token =  localStorage.getItem('token');
    if(token){
      console.log('verify the token with Backend');
    }else{
      window.location.replace('http://localhost:5000');
    }
  }

  logout(){
    localStorage.setItem('token', '');
    window.location.replace('http://localhost:5000');
  }
}

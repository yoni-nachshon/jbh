import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'username';
  userName:any;
  getUserName(userName:string){
    this.userName = userName;
  
  }
}

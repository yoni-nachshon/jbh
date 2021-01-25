import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {  userModel } from '../models/userModel';
import { NameService } from '../services/name.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit, OnChanges {
  @Input()userName:any;
  info = {
    login:null,
    avatar_url:null,
    location:null,
    url:null, 
    company:null
  };
 

  constructor(private nameService:NameService) { 
   
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.nameService.get(this.userName).subscribe(info => { 
      this.info.login=info.login, this.info.location=info.location,
      this.info.url=info.url, this.info.company=info.company,
      this.info.avatar_url=info.avatar_url});
      
    if(this.userName!==changes.userName.currentValue){
      this.userName = changes.userName.currentValue;
    }
  }
  

  ngOnInit(): void {
   

  }
 

   

  
} 
 
  



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
  info:any;

  constructor(private nameService:NameService) { 
   
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.userName!==changes.userName.currentValue){
      this.userName = changes.userName.currentValue;
    }
  }
  

  ngOnInit(): void {
    this.nameService.get(this.userName).subscribe(info =>{
      this.info = info;
    });

  }
 

   

  
} 
 
  



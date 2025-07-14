import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@Component({
  selector: 'app-home',
  imports: [MatProgressBarModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  showProgressBar = true;
ngOnInit():void{
setTimeout(()=>{
  this.showProgressBar = false;
},20000)
}

}

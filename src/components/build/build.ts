import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-build',
  imports: [
    MatSelectModule,FormsModule,MatInputModule,MatButtonModule
    ],
  templateUrl: './build.html',
  styleUrl: './build.scss'
})
export class Build {
 public readonly script = "inserIntoDynamoDB.js";
 public readonly region = "us-east-1";
 public readonly env = "dit";

 public navigateToHome(){
      const host = window.location.origin;
    window.open(host + "/#/home", "_self");
    window.location.reload();
 }
}

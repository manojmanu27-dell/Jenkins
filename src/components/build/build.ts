import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
@Component({
  selector: 'app-build',
  imports: [
    MatSelectModule,FormsModule, ReactiveFormsModule
    ],
  templateUrl: './build.html',
  styleUrl: './build.scss'
})
export class Build {
 
}

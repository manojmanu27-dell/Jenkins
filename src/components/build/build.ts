import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-build',
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule ,// Import MatCardModule,
    CommonModule
  ],
  templateUrl: './build.html',
  styleUrl: './build.scss'
})
export class Build {

  // You can use these properties to bind to ngModel or Reactive Forms
  selectedOption1: string = 'option1a';
  selectedOption2: string = 'option2a';
  selectedOption3: string = 'option3a';
  selectedOption4: string = 'option4a';
  inputValue: string = '';

  onBuild() {
    console.log('Build button clicked!');
    console.log('Selected Option 1:', this.selectedOption1);
    console.log('Selected Option 2:', this.selectedOption2);
    console.log('Selected Option 3:', this.selectedOption3);
    console.log('Selected Option 4:', this.selectedOption4);
    console.log('Input Value:', this.inputValue);
    // Add your build logic here
  }

  onCancel() {
    console.log('Cancel button clicked!');
    // Add your cancel logic here, e.g., reset form
    this.selectedOption1 = 'option1a';
    this.selectedOption2 = 'option2a';
    this.selectedOption3 = 'option3a';
    this.selectedOption4 = 'option4a';
    this.inputValue = '';
  }
}

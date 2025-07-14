import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sidebar',
  imports: [MatButtonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  navigateToBuild() {
    const host = window.location.origin;
    window.open(host + "/#/build", "_self");
    window.location.reload();
  }
}

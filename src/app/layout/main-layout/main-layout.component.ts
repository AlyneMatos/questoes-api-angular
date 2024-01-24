import { Component, computed } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  isSidebarOpened = false;

  toggleSidebar() {
    console.log("1");
    this.isSidebarOpened = !this.isSidebarOpened;
    console.log("2");
  }

}

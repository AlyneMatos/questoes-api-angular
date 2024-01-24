import { Component, Output, EventEmitter, computed } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // opened = true;

  // @Output() nav = new EventEmitter(false);

  // sideNav(){
  //   this.nav.emit(true);
  // }

  @Output() sidebarToggled = new EventEmitter<void>();

  toggleSidebar() {
    console.log("3");
    this.sidebarToggled.emit();
    console.log("4");
  }
}

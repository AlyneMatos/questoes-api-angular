import { Component, Input } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Input() isSidebarOpened = false;

  toggleSidebar() {
    this.isSidebarOpened = !this.isSidebarOpened;
  }

  // sidenavWidth = computed(()=>this.isSidebarOpened ? '65px':'250px');

  onActivate(event: any) {
    // Lógica para exibir ou ocultar a componente de estatística com base na rota ativa
  }
}

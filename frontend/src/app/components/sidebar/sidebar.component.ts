import { Component, ElementRef, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('toggleButton') toggleButton!: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.sidebar.nativeElement);
    console.log(this.toggleButton.nativeElement);
  }

  toggleSidebar(): void {
    this.sidebar.nativeElement.classList.toggle('close');
    this.toggleButton.nativeElement.classList.toggle('rotate');
    this.closeAllSubMenus();
  }

  toggleSubMenu(event: Event): void {
    const button = event.currentTarget as HTMLElement | null;

     if (!button) return;
  
    const submenu = button.nextElementSibling as HTMLElement;

    if (!submenu.classList.contains('show')) {
      this.closeAllSubMenus();
    }

    submenu.classList.toggle('show');
    button.classList.toggle('rotate');

    if (this.sidebar.nativeElement.classList.contains('close')) {
      this.sidebar.nativeElement.classList.remove('close');
      this.toggleButton.nativeElement.classList.remove('rotate');
    }
  }

  closeAllSubMenus(): void {
    const shownSubmenus = this.sidebar.nativeElement.querySelectorAll('.show');
    shownSubmenus.forEach((ul: any) => {
      ul.classList.remove('show');
      if (ul.previousElementSibling) {
        ul.previousElementSibling.classList.remove('rotate');
      }
    });
  }
}

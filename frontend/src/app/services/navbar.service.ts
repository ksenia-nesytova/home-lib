import { Injectable, signal } from '@angular/core';

export enum MenuState {
  Collapsed = 'collapsed',
  Expanded = 'expanded',
};

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  isCollapsed = signal<boolean>(false);
  isMobileOpen = signal<boolean>(false);

  constructor() {
    this.initMenu();
  }

  collapse(isCollapsed: boolean = false): void {
    this.isCollapsed.set(isCollapsed);
  }

  public toggleDesktop(): void {
    this.isMobileOpen.set(false);

    this.collapse(!this.isCollapsed());

    this.saveMenuState(this.isCollapsed());
  }

  public toggleMobile(): void {
    this.collapse(false);
    this.isMobileOpen.set(!this.isMobileOpen());
  }

  private initMenu(): void {
    const stored = localStorage.getItem('menuState');

    if (stored === MenuState.Collapsed) {
      this.isCollapsed.set(true);
    } else {
      this.isCollapsed.set(false);
    }
  }

  private saveMenuState(isCollapsed: boolean): void {
    localStorage.setItem('menuState', isCollapsed ? MenuState.Collapsed : MenuState.Expanded);
  }
}

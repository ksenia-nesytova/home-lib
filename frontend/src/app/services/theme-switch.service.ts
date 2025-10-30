import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { HLTheme } from '@app/shared/enums/HLTheme';

@Injectable({
  providedIn: 'root'
})
export class ThemeSwitchService {
  private _currentTheme: WritableSignal<HLTheme> = signal<HLTheme>(HLTheme.light);
  public readonly currentTheme: Signal<HLTheme> = this._currentTheme.asReadonly();

  constructor() {
    this.initTheme();
  }

  private initTheme() {
    const storedTheme = localStorage.getItem('theme') as keyof typeof HLTheme;

    const theme = storedTheme && HLTheme[storedTheme] ? HLTheme[storedTheme] : HLTheme.light;
    this.setTheme(theme);
  }

  public setTheme(theme: HLTheme) {
    this._currentTheme.set(theme);
    document.documentElement.setAttribute('data-theme', HLTheme[theme]);
    localStorage.setItem('theme', HLTheme[theme]);
  }

  public toggleTheme() {
    const newTheme = this._currentTheme() === HLTheme.dark ? HLTheme.light : HLTheme.dark;
    this.setTheme(newTheme);
  }
}

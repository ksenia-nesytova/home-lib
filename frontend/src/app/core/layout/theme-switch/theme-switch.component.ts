import { Component, effect, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ThemeSwitchService } from '@app/core/services/theme-switch.service';
import { HLTheme } from '@app/shared/enums/HLTheme';

@Component({
  selector: 'app-theme-switch',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './theme-switch.component.html',
  styleUrl: './theme-switch.component.scss'
})
export class ThemeSwitchComponent {
  private themeService: ThemeSwitchService = inject(ThemeSwitchService);

  protected isDarkMode = signal<boolean>(
    this.themeService.currentTheme() === HLTheme.dark
  );

  public isActive = signal<boolean>(false);


  protected active = new FormControl<boolean>(this.isActive(), { nonNullable: true });

  constructor() {
    effect(() => {
      this.isDarkMode.set(this.themeService.currentTheme() === HLTheme.dark);
    });
  }

  toggle() {
    this.themeService.toggleTheme();
  }
}


import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  imports: [CommonModule],
  template: `
    <button
      (click)="toggleTheme()"
      class="relative p-2 rounded-lg bg-secondary-100 hover:bg-secondary-200 dark:bg-secondary-800 dark:hover:bg-secondary-700 text-secondary-700 dark:text-secondary-300 transition-all duration-300 ease-in-out group"
      [attr.aria-label]="themeService.isDark() ? 'Alternar para modo claro' : 'Alternar para modo escuro'"
      title="{{ themeService.isDark() ? 'Alternar para modo claro' : 'Alternar para modo escuro' }}"
    >
      <!-- Debug: Mostrar texto do tema atual -->
      <span class="text-xs mr-2">{{ themeService.currentTheme() }}</span>
      
      <!-- Ícone do sol (quando está em modo escuro, mostra sol para alternar para claro) -->
      <svg
        *ngIf="themeService.isDark()"
        class="w-5 h-5 transition-all duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="5"></circle>
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
      </svg>

      <!-- Ícone da lua (quando está em modo claro, mostra lua para alternar para escuro) -->
      <svg
        *ngIf="themeService.isLight()"
        class="w-5 h-5 transition-all duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>

      <!-- Efeito de hover -->
      <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
  `]
})
export class ThemeToggleComponent {
  protected readonly themeService = inject(ThemeService);

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}

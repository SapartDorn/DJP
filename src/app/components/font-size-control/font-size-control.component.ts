import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontSizeService, FontSize } from '../../services/font-size.service';

@Component({
  selector: 'app-font-size-control',
  imports: [CommonModule],
  template: `
    <div class="relative">
      <button
        (click)="toggleDropdown()"
        class="relative p-2 rounded-lg bg-secondary-100 hover:bg-secondary-200 dark:bg-secondary-800 dark:hover:bg-secondary-700 text-secondary-700 dark:text-secondary-300 transition-all duration-300 ease-in-out"
        [attr.aria-label]="'Controle de tamanho da fonte'"
        title="Controle de tamanho da fonte"
        [attr.aria-expanded]="isDropdownOpen()"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path>
        </svg>
        <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-500/10 to-accent-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </button>
      
      <!-- Dropdown Menu -->
      <div 
        class="absolute top-full mt-2 w-56 sm:w-48 bg-white dark:bg-secondary-800 rounded-lg shadow-lg border border-secondary-200 dark:border-secondary-700 transition-all duration-300 z-50 right-0"
        [class.opacity-0]="!isDropdownOpen()"
        [class.invisible]="!isDropdownOpen()"
        [class.opacity-100]="isDropdownOpen()"
        [class.visible]="isDropdownOpen()"
      >
        <div class="p-2">
          <div class="text-xs font-semibold text-secondary-600 dark:text-secondary-400 mb-2 px-2">Tamanho da Fonte</div>
          
          <button
            (click)="setFontSize('small')"
            class="w-full flex items-center justify-between px-3 py-3 sm:py-2 text-sm rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-colors duration-200 touch-manipulation"
            [class.bg-primary-100]="fontSizeService.isSmall()"
            [class.text-primary-700]="fontSizeService.isSmall()"
            [class.dark:bg-primary-900]="fontSizeService.isSmall()"
            [class.dark:text-primary-300]="fontSizeService.isSmall()"
          >
            <span class="flex items-center gap-2">
              <span class="text-xs">Aa</span>
              <span>Pequeno</span>
            </span>
            <svg *ngIf="fontSizeService.isSmall()" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
          </button>
          
          <button
            (click)="setFontSize('normal')"
            class="w-full flex items-center justify-between px-3 py-3 sm:py-2 text-sm rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-colors duration-200 touch-manipulation"
            [class.bg-primary-100]="fontSizeService.isNormal()"
            [class.text-primary-700]="fontSizeService.isNormal()"
            [class.dark:bg-primary-900]="fontSizeService.isNormal()"
            [class.dark:text-primary-300]="fontSizeService.isNormal()"
          >
            <span class="flex items-center gap-2">
              <span class="text-sm">Aa</span>
              <span>Normal</span>
            </span>
            <svg *ngIf="fontSizeService.isNormal()" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
          </button>
          
          <button
            (click)="setFontSize('large')"
            class="w-full flex items-center justify-between px-3 py-3 sm:py-2 text-sm rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-colors duration-200 touch-manipulation"
            [class.bg-primary-100]="fontSizeService.isLarge()"
            [class.text-primary-700]="fontSizeService.isLarge()"
            [class.dark:bg-primary-900]="fontSizeService.isLarge()"
            [class.dark:text-primary-300]="fontSizeService.isLarge()"
          >
            <span class="flex items-center gap-2">
              <span class="text-base">Aa</span>
              <span>Grande</span>
            </span>
            <svg *ngIf="fontSizeService.isLarge()" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
          </button>
          
          <button
            (click)="setFontSize('extra-large')"
            class="w-full flex items-center justify-between px-3 py-3 sm:py-2 text-sm rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-colors duration-200 touch-manipulation"
            [class.bg-primary-100]="fontSizeService.isExtraLarge()"
            [class.text-primary-700]="fontSizeService.isExtraLarge()"
            [class.dark:bg-primary-900]="fontSizeService.isExtraLarge()"
            [class.dark:text-primary-300]="fontSizeService.isExtraLarge()"
          >
            <span class="flex items-center gap-2">
              <span class="text-lg">Aa</span>
              <span>Muito Grande</span>
            </span>
            <svg *ngIf="fontSizeService.isExtraLarge()" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
  `]
})
export class FontSizeControlComponent {
  protected readonly fontSizeService = inject(FontSizeService);
  protected readonly isDropdownOpen = signal(false);

  setFontSize(fontSize: FontSize): void {
    this.fontSizeService.setFontSize(fontSize);
    this.closeDropdown();
  }

  toggleDropdown(): void {
    this.isDropdownOpen.set(!this.isDropdownOpen());
  }

  closeDropdown(): void {
    this.isDropdownOpen.set(false);
  }
}

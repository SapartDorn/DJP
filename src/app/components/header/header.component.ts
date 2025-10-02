import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeDirectComponent } from '../theme-direct/theme-direct.component';

@Component({
  selector: 'app-header',
  imports: [CommonModule, ThemeDirectComponent],
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-secondary-900/95 backdrop-blur-sm border-b border-secondary-200 dark:border-secondary-700 shadow-sm">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
        
          
          <!-- Navigation Menu -->
          <div class="hidden md:flex items-center space-x-8">
            <a href="#home" class="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-300">Início</a>
            <a href="#about" class="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-300">Sobre</a>
            <a href="#services" class="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-300">Serviços</a>
            <a href="#fleet" class="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-300">Frota</a>
            <a href="#contact" class="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-300">Contato</a>
          </div>
          
          <!-- CTA Button and Theme Toggle -->
          <div class="hidden md:flex items-center space-x-4">
            <app-theme-direct></app-theme-direct>
            <a href="#contact" class="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300">
              Solicitar Orçamento
            </a>
          </div>
          
          <!-- Mobile Menu Button and Theme Toggle -->
          <div class="md:hidden flex items-center space-x-2">
            <app-theme-direct></app-theme-direct>
            <button class="p-2 text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300" (click)="toggleMobileMenu()">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Mobile Menu -->
        <div class="md:hidden mt-4 pb-4" [class.hidden]="!isMobileMenuOpen">
          <div class="flex flex-col space-y-4">
            <a href="#home" class="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-300">Início</a>
            <a href="#about" class="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-300">Sobre</a>
            <a href="#services" class="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-300">Serviços</a>
            <a href="#fleet" class="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-300">Frota</a>
            <a href="#contact" class="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-300">Contato</a>
            <a href="#contact" class="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300 text-center">
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .container {
      max-width: 1200px;
    }
  `]
})
export class HeaderComponent {
  isMobileMenuOpen = false;
  
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}

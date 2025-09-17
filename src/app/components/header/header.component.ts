import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-header',
  imports: [CommonModule, LogoComponent],
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-secondary-200 shadow-sm">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
        
          
          <!-- Navigation Menu -->
          <div class="hidden md:flex items-center space-x-8">
            <a href="#home" class="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-300">Início</a>
            <a href="#about" class="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-300">Sobre</a>
            <a href="#services" class="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-300">Serviços</a>
            <a href="#contact" class="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-300">Contato</a>
          </div>
          
          <!-- CTA Button -->
          <div class="hidden md:flex items-center">
            <a href="#contact" class="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300">
              Solicitar Orçamento
            </a>
          </div>
          
          <!-- Mobile Menu Button -->
          <button class="md:hidden p-2 text-secondary-700 hover:text-primary-600 transition-colors duration-300" (click)="toggleMobileMenu()">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        
        <!-- Mobile Menu -->
        <div class="md:hidden mt-4 pb-4" [class.hidden]="!isMobileMenuOpen">
          <div class="flex flex-col space-y-4">
            <a href="#home" class="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-300">Início</a>
            <a href="#about" class="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-300">Sobre</a>
            <a href="#services" class="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-300">Serviços</a>
            <a href="#contact" class="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-300">Contato</a>
            <a href="#contact" class="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300 text-center">
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

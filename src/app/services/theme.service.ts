import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'djp-theme';
  private readonly platformId = inject(PLATFORM_ID);
  
  // Signal para o tema atual
  private _currentTheme = signal<Theme>('light');
  
  // Getter público para o tema atual
  public currentTheme = this._currentTheme.asReadonly();

  constructor() {
    // Carregar tema salvo do localStorage ou usar preferência do sistema
    this.loadTheme();
    
    // Effect para aplicar o tema quando mudar
    effect(() => {
      this.applyTheme(this._currentTheme());
    });
  }

  /**
   * Carrega o tema salvo do localStorage ou detecta preferência do sistema
   */
  private loadTheme(): void {
    // Verificar se estamos no browser
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const savedTheme = localStorage.getItem(this.THEME_KEY) as Theme;
    
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      this._currentTheme.set(savedTheme);
    } else {
      // Detectar preferência do sistema
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const systemTheme = prefersDark ? 'dark' : 'light';
      this._currentTheme.set(systemTheme);
    }
  }

  /**
   * Alterna entre tema claro e escuro
   */
  toggleTheme(): void {
    const currentTheme = this._currentTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  /**
   * Define um tema específico
   */
  setTheme(theme: Theme): void {
    this._currentTheme.set(theme);
    
    // Verificar se estamos no browser antes de usar localStorage
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.THEME_KEY, theme);
    }
  }

  /**
   * Aplica o tema ao documento
   */
  private applyTheme(theme: Theme): void {
    // Verificar se estamos no browser
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const htmlElement = document.documentElement;
    
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
      htmlElement.classList.remove('light');
    } else {
      htmlElement.classList.add('light');
      htmlElement.classList.remove('dark');
    }
    
    // Forçar reflow para garantir que as classes sejam aplicadas
    htmlElement.offsetHeight;
    
    // Atualizar meta theme-color para navegadores móveis
    this.updateThemeColor(theme);
  }

  /**
   * Atualiza a cor do tema para navegadores móveis
   */
  private updateThemeColor(theme: Theme): void {
    // Verificar se estamos no browser
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(metaThemeColor);
    }
    
    const color = theme === 'dark' ? '#0f172a' : '#ffffff';
    metaThemeColor.setAttribute('content', color);
  }

  /**
   * Verifica se o tema atual é escuro
   */
  isDark(): boolean {
    return this._currentTheme() === 'dark';
  }

  /**
   * Verifica se o tema atual é claro
   */
  isLight(): boolean {
    return this._currentTheme() === 'light';
  }

  /**
   * Reseta o tema para o padrão (light) e limpa o localStorage
   */
  resetTheme(): void {
    this._currentTheme.set('light');
    
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.THEME_KEY);
    }
  }
}

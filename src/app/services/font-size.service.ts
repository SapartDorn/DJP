import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type FontSize = 'small' | 'normal' | 'large' | 'extra-large';

@Injectable({
  providedIn: 'root'
})
export class FontSizeService {
  private readonly FONT_SIZE_KEY = 'djp-font-size';
  private readonly platformId = inject(PLATFORM_ID);
  
  private _currentFontSize = signal<FontSize>('normal');
  public currentFontSize = this._currentFontSize.asReadonly();

  constructor() {
    this.loadFontSize();
    effect(() => {
      this.applyFontSize(this._currentFontSize());
    });
  }

  private loadFontSize(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const savedFontSize = localStorage.getItem(this.FONT_SIZE_KEY) as FontSize;
    if (savedFontSize && ['small', 'normal', 'large', 'extra-large'].includes(savedFontSize)) {
      this._currentFontSize.set(savedFontSize);
    }
  }

  setFontSize(fontSize: FontSize): void {
    this._currentFontSize.set(fontSize);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.FONT_SIZE_KEY, fontSize);
    }
  }

  private applyFontSize(fontSize: FontSize): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const htmlElement = document.documentElement;
    
    // Remove todas as classes de tamanho de fonte
    htmlElement.classList.remove('font-small', 'font-normal', 'font-large', 'font-extra-large');
    
    // Adiciona a classe correspondente
    htmlElement.classList.add(`font-${fontSize}`);
  }

  getFontSizeClass(): string {
    return `font-${this._currentFontSize()}`;
  }

  isSmall(): boolean {
    return this._currentFontSize() === 'small';
  }

  isNormal(): boolean {
    return this._currentFontSize() === 'normal';
  }

  isLarge(): boolean {
    return this._currentFontSize() === 'large';
  }

  isExtraLarge(): boolean {
    return this._currentFontSize() === 'extra-large';
  }

  resetFontSize(): void {
    this._currentFontSize.set('normal');
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.FONT_SIZE_KEY);
    }
  }
}

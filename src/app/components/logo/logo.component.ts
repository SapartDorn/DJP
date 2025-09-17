import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  imports: [CommonModule],
  template: `
    <div class="logo-container" [class]="size" [class.dark]="dark">
      <div class="logo-content">
        <!-- Top Row: DJP + Truck -->
        <div class="top-row">
          
          <div class="truck-silhouette">
            <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
              <!-- Cabine do caminhão -->
              <path d="M8 12h35l4-4v20l-4 4H8l-4-4V8l4 4z" fill="#6B7280"/>
              <!-- Janelas -->
              <rect x="12" y="10" width="12" height="8" fill="#E5E7EB"/>
              <rect x="26" y="10" width="12" height="8" fill="#E5E7EB"/>
              <!-- Rodas -->
              <circle cx="10" cy="28" r="3" fill="#374151"/>
              <circle cx="45" cy="28" r="3" fill="#374151"/>
            </svg>
          </div>
        </div>
        
        <!-- Horizontal Line with Arrow -->
        <div class="horizontal-line">
          <div class="line"></div>
          <div class="arrow"></div>
        </div>
        
        <!-- LOGISTICA Text with Speed Lines -->
        <div class="logistica-row">
          <div class="speed-lines">
            <div class="speed-line"></div>
            <div class="speed-line"></div>
            <div class="speed-line"></div>
            <div class="speed-line"></div>
          </div>
          <div class="logistica-text">LOGISTICA</div>
        </div>
        
        <!-- Slogan -->
        <div class="slogan" *ngIf="showSlogan">
          "<span class="d">D</span>istância <span class="j">J</span>amais <span class="p">P</span>ara um sonho"
        </div>
      </div>
 
  `,
  styles: [`
    .logo-container {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .logo-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: relative;
      width: 100%;
      max-width: 300px;
    }
    
    .top-row {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 0.5rem;
    }
    
    .djp-text {
      font-size: 3rem;
      font-weight: 900;
      color: #2563eb;
      line-height: 1;
      font-family: 'Arial', sans-serif;
    }
    
    .truck-silhouette {
      margin-top: 0.25rem;
    }
    
    .horizontal-line {
      position: relative;
      width: 100%;
      height: 3px;
      margin: 0.5rem 0;
    }
    
    .line {
      width: 100%;
      height: 3px;
      background: #9CA3AF;
      border-radius: 1px;
    }
    
    .arrow {
      position: absolute;
      right: -6px;
      top: -3px;
      width: 0;
      height: 0;
      border-left: 6px solid #9CA3AF;
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
    }
    
    .logistica-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
    
    .speed-lines {
      display: flex;
      flex-direction: column;
      gap: 1px;
      margin-right: 0.5rem;
    }
    
    .speed-line {
      height: 1px;
      background: #9CA3AF;
      border-radius: 0.5px;
    }
    
    .speed-line:nth-child(1) { width: 12px; }
    .speed-line:nth-child(2) { width: 10px; }
    .speed-line:nth-child(3) { width: 8px; }
    .speed-line:nth-child(4) { width: 6px; }
    
    .logistica-text {
      font-size: 1.25rem;
      font-weight: 700;
      color: #1e40af;
      font-family: 'Arial', sans-serif;
      letter-spacing: 0.05em;
    }
    
    .slogan {
      font-size: 0.875rem;
      color: #475569;
      margin-top: 0.75rem;
      text-align: center;
      width: 100%;
      font-style: italic;
    }
    
    .slogan .d, .slogan .j, .slogan .p {
      color: #2563eb;
      font-weight: 700;
    }
    
    /* Dark theme */
    .logo-container.dark .djp-text {
      color: #60a5fa;
    }
    
    .logo-container.dark .logistica-text {
      color: #60a5fa;
    }
    
    .logo-container.dark .slogan {
      color: #9CA3AF;
    }
    
    .logo-container.dark .slogan .d, 
    .logo-container.dark .slogan .j, 
    .logo-container.dark .slogan .p {
      color: #60a5fa;
    }
    
    /* Size variants */
    .logo-container.small .djp-text { font-size: 1.75rem; }
    .logo-container.small .logistica-text { font-size: 0.875rem; }
    .logo-container.small .slogan { font-size: 0.625rem; }
    .logo-container.small .truck-silhouette svg { width: 40px; height: 26px; }
    .logo-container.small .horizontal-line { height: 2px; }
    .logo-container.small .arrow { 
      right: -4px; 
      top: -2px; 
      border-left: 4px solid #9CA3AF; 
      border-top: 2px solid transparent; 
      border-bottom: 2px solid transparent; 
    }
    
    .logo-container.large .djp-text { font-size: 4.5rem; }
    .logo-container.large .logistica-text { font-size: 1.75rem; }
    .logo-container.large .slogan { font-size: 1.125rem; }
    .logo-container.large .truck-silhouette svg { width: 80px; height: 53px; }
    .logo-container.large .horizontal-line { height: 4px; }
    .logo-container.large .arrow { 
      right: -8px; 
      top: -4px; 
      border-left: 8px solid #9CA3AF; 
      border-top: 4px solid transparent; 
      border-bottom: 4px solid transparent; 
    }
    
    .logo-container.medium .djp-text { font-size: 3rem; }
    .logo-container.medium .logistica-text { font-size: 1.25rem; }
    .logo-container.medium .slogan { font-size: 0.875rem; }
    .logo-container.medium .truck-silhouette svg { width: 60px; height: 40px; }
  `]
})
export class LogoComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() showSlogan: boolean = true;
  @Input() dark: boolean = false;
}

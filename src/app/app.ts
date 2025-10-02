import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('djp');
  private readonly themeService = inject(ThemeService);

  constructor() {
    // Inicializar o serviço de tema para carregar a preferência salva
    // O serviço já é inicializado automaticamente pelo inject()
  }
}

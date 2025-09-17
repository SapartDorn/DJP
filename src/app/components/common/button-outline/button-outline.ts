import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-outline',
  imports: [CommonModule],
  templateUrl: './button-outline.html',
  styleUrl: './button-outline.css'
})
export class ButtonOutline {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() fullWidth: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() color: 'primary' | 'secondary' | 'accent' = 'primary';
  @Output() onClick = new EventEmitter<Event>();

  onButtonClick(event: Event) {
    if (!this.disabled && !this.loading) {
      this.onClick.emit(event);
    }
  }

  get buttonClasses(): string {
    const classes = ['btn-outline', `btn-outline-${this.color}`, `btn-${this.size}`];
    
    if (this.fullWidth) {
      classes.push('btn-full');
    }
    
    if (this.disabled) {
      classes.push('btn-disabled');
    }
    
    if (this.loading) {
      classes.push('btn-loading');
    }
    
    return classes.join(' ');
  }
}

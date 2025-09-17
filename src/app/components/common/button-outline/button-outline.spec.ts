import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOutline } from './button-outline';

describe('ButtonOutline', () => {
  let component: ButtonOutline;
  let fixture: ComponentFixture<ButtonOutline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonOutline]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonOutline);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

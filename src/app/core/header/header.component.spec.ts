import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
/* Schema */
import { NO_ERRORS_SCHEMA } from '@angular/core';
/* Components */
import { HeaderComponent } from './header.component';
/* Material */
import { MatButtonModule, MatToolbarModule } from '@angular/material';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatToolbarModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('validate invokeSnavToggle', () => {
    const spy = spyOn(component.invokeSnavToggle, 'emit').and.callThrough();
    component.invokeSnavToggle.subscribe(() => {
      expect(spy).toHaveBeenCalled();
    });
    component.invokeSnavToggle.emit();
  });
});

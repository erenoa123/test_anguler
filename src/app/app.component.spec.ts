import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* FlexLayout */
import { FlexLayoutModule } from '@angular/flex-layout';

/* Schema */
import { NO_ERRORS_SCHEMA } from '@angular/core';

/* Components */
import { AppComponent } from './app.component';

/* Materials */
import { MatSidenavModule } from '@angular/material';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        BrowserModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        MatSidenavModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

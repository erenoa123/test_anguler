import { ComponentFixture, TestBed } from '@angular/core/testing';
/* Schema */
import { NO_ERRORS_SCHEMA } from '@angular/core';
/* Component */
import { SideNavComponent } from './side-nav.component';
/* Material */
import { MatListModule } from '@angular/material';

describe('SideNavComponent', () => {
  let component: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideNavComponent],
      imports: [MatListModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(SideNavComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('validate invokeSnavClose', () => {
    const spy = spyOn(component.invokeSnavClose, 'emit').and.callThrough();
    component.invokeSnavClose.subscribe(() => {
      expect(spy).toHaveBeenCalled();
    });
    component.invokeSnavClose.emit();
  });
});

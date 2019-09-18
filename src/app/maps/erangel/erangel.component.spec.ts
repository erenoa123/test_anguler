import { ComponentFixture, TestBed } from '@angular/core/testing';

/* Components */
import { ErangelComponent } from './erangel.component';

describe('ErangelComponent', () => {
  let component: ErangelComponent;
  let fixture: ComponentFixture<ErangelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErangelComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(ErangelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

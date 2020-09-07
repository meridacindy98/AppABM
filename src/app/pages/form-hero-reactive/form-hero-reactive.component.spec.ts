import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHeroReactiveComponent } from './form-hero-reactive.component';

describe('FormHeroReactiveComponent', () => {
  let component: FormHeroReactiveComponent;
  let fixture: ComponentFixture<FormHeroReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHeroReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHeroReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

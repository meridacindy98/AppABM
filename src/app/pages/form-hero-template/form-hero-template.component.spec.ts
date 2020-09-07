import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHeroTemplateComponent } from './form-hero-template.component';

describe('FormHeroTemplateComponent', () => {
  let component: FormHeroTemplateComponent;
  let fixture: ComponentFixture<FormHeroTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHeroTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHeroTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

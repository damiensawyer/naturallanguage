import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalLanguageTestComponent } from './natural-language-test.component';

describe('NaturalLanguageTestComponent', () => {
  let component: NaturalLanguageTestComponent;
  let fixture: ComponentFixture<NaturalLanguageTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturalLanguageTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalLanguageTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

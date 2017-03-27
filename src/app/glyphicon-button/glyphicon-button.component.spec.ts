import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlyphiconButtonComponent } from './glyphicon-button.component';

describe('GlyphiconButtonComponent', () => {
  let component: GlyphiconButtonComponent;
  let fixture: ComponentFixture<GlyphiconButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlyphiconButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlyphiconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

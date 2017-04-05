import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementSearchGridComponent } from './agreement-search-grid.component';

describe('AgreementSearchGridComponent', () => {
  let component: AgreementSearchGridComponent;
  let fixture: ComponentFixture<AgreementSearchGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgreementSearchGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementSearchGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

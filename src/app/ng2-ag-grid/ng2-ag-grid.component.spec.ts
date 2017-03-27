import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2AgGridComponent } from './ng2-ag-grid.component';

describe('Ng2AgGridComponent', () => {
  let component: Ng2AgGridComponent;
  let fixture: ComponentFixture<Ng2AgGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2AgGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2AgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2SelecteditemsComponent } from './ng2-selecteditems.component';

describe('Ng2SelecteditemsComponent', () => {
  let component: Ng2SelecteditemsComponent;
  let fixture: ComponentFixture<Ng2SelecteditemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2SelecteditemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2SelecteditemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

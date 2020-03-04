import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeMoneyComponent } from './some-money.component';

describe('SomeMoneyComponent', () => {
  let component: SomeMoneyComponent;
  let fixture: ComponentFixture<SomeMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

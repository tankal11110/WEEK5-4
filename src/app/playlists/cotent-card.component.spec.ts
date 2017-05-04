import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotentCardComponent } from './cotent-card.component';

describe('CotentCardComponent', () => {
  let component: CotentCardComponent;
  let fixture: ComponentFixture<CotentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

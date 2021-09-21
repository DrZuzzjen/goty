import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalGraphBarComponent } from './horizontal-graph-bar.component';

describe('HorizontalGraphBarComponent', () => {
  let component: HorizontalGraphBarComponent;
  let fixture: ComponentFixture<HorizontalGraphBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalGraphBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalGraphBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

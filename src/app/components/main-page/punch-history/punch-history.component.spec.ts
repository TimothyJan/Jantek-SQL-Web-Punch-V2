import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunchHistoryComponent } from './punch-history.component';

describe('PunchHistoryComponent', () => {
  let component: PunchHistoryComponent;
  let fixture: ComponentFixture<PunchHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PunchHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PunchHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

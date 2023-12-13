import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebReportMobileComponent } from './web-report-mobile.component';

describe('WebReportMobileComponent', () => {
  let component: WebReportMobileComponent;
  let fixture: ComponentFixture<WebReportMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebReportMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebReportMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

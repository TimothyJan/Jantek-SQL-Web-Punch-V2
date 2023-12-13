import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyRightsComponent } from './modify-rights.component';

describe('ModifyRightsComponent', () => {
  let component: ModifyRightsComponent;
  let fixture: ComponentFixture<ModifyRightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModifyRightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifyRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

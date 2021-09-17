import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCUVariablelistComponent } from './ccuvariablelist.component';

describe('CCUVariablelistComponent', () => {
  let component: CCUVariablelistComponent;
  let fixture: ComponentFixture<CCUVariablelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CCUVariablelistComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CCUVariablelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

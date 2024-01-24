import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudaComponent } from './estuda.component';

describe('EstudaComponent', () => {
  let component: EstudaComponent;
  let fixture: ComponentFixture<EstudaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstudaComponent]
    });
    fixture = TestBed.createComponent(EstudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

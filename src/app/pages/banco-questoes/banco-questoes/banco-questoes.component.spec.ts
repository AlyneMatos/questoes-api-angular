import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoQuestoesComponent } from './banco-questoes.component';

describe('BancoQuestoesComponent', () => {
  let component: BancoQuestoesComponent;
  let fixture: ComponentFixture<BancoQuestoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BancoQuestoesComponent]
    });
    fixture = TestBed.createComponent(BancoQuestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

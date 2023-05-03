import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesPersonalizadosComponent } from './componentes-personalizados.component';

describe('ComponentesPersonalizadosComponent', () => {
  let component: ComponentesPersonalizadosComponent;
  let fixture: ComponentFixture<ComponentesPersonalizadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentesPersonalizadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentesPersonalizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

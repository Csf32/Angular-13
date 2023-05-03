import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsSonComponent } from './components-son.component';

describe('ComponentsSonComponent', () => {
  let component: ComponentsSonComponent;
  let fixture: ComponentFixture<ComponentsSonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsSonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

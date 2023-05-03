import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsFatherComponent } from './components-father.component';

describe('ComponentsFatherComponent', () => {
  let component: ComponentsFatherComponent;
  let fixture: ComponentFixture<ComponentsFatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsFatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsFatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

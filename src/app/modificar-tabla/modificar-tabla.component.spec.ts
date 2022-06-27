import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarTablaComponent } from './modificar-tabla.component';

describe('ModificarTablaComponent', () => {
  let component: ModificarTablaComponent;
  let fixture: ComponentFixture<ModificarTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

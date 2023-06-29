import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilMecanicoComponent } from './perfil-mecanico.component';

describe('PerfilMecanicoComponent', () => {
  let component: PerfilMecanicoComponent;
  let fixture: ComponentFixture<PerfilMecanicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilMecanicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilMecanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

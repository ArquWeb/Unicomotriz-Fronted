import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMecanicoComponent } from './nav-mecanico.component';

describe('NavMecanicoComponent', () => {
  let component: NavMecanicoComponent;
  let fixture: ComponentFixture<NavMecanicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavMecanicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMecanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

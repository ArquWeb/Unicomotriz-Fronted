import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEditProductoComponent } from './new-edit-producto.component';

describe('NewEditProductoComponent', () => {
  let component: NewEditProductoComponent;
  let fixture: ComponentFixture<NewEditProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEditProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEditProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

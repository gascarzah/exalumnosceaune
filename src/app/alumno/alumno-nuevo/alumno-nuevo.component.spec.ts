import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoNuevoComponent } from './alumno-nuevo.component';

describe('AlumnoNuevoComponent', () => {
  let component: AlumnoNuevoComponent;
  let fixture: ComponentFixture<AlumnoNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmenitesComponent } from './amenites.component';

describe('AmenitesComponent', () => {
  let component: AmenitesComponent;
  let fixture: ComponentFixture<AmenitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmenitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmenitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

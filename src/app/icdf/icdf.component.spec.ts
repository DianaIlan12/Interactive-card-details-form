import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcdfComponent } from './icdf.component';

describe('IcdfComponent', () => {
  let component: IcdfComponent;
  let fixture: ComponentFixture<IcdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesChartComponent } from './species-chart.component';

describe('SpeciesChartComponent', () => {
  let component: SpeciesChartComponent;
  let fixture: ComponentFixture<SpeciesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeciesChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeciesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

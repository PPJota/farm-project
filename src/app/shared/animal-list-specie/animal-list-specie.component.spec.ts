import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalListSpecieComponent } from './animal-list-specie.component';

describe('AnimalListSpecieComponent', () => {
  let component: AnimalListSpecieComponent;
  let fixture: ComponentFixture<AnimalListSpecieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalListSpecieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalListSpecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

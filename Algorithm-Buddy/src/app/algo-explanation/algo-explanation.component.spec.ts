import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoExplanationComponent } from './algo-explanation.component';

describe('AlgoExplanationComponent', () => {
  let component: AlgoExplanationComponent;
  let fixture: ComponentFixture<AlgoExplanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgoExplanationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

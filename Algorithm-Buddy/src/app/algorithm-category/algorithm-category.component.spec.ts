import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmCategoryComponent } from './algorithm-category.component';

describe('AlgorithmCategoryComponent', () => {
  let component: AlgorithmCategoryComponent;
  let fixture: ComponentFixture<AlgorithmCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgorithmCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgorithmCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

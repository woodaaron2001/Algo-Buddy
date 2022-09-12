import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackmatDialogComponent } from './stackmat-dialog.component';

describe('StackmatDialogComponent', () => {
  let component: StackmatDialogComponent;
  let fixture: ComponentFixture<StackmatDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackmatDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackmatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

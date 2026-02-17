import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task15 } from './task15';

describe('Task15', () => {
  let component: Task15;
  let fixture: ComponentFixture<Task15>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task15]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task15);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

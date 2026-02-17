import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task12 } from './task12';

describe('Task12', () => {
  let component: Task12;
  let fixture: ComponentFixture<Task12>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task12]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task12);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

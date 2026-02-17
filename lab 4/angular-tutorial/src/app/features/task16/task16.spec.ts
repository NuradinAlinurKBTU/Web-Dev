import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task16 } from './task16';

describe('Task16', () => {
  let component: Task16;
  let fixture: ComponentFixture<Task16>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task16]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task16);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

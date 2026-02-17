import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task14 } from './task14';

describe('Task14', () => {
  let component: Task14;
  let fixture: ComponentFixture<Task14>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task14]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task14);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task13 } from './task13';

describe('Task13', () => {
  let component: Task13;
  let fixture: ComponentFixture<Task13>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task13]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task13);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

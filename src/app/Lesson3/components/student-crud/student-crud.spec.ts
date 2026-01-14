import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCRUD } from './student-crud';

describe('StudentCRUD', () => {
  let component: StudentCRUD;
  let fixture: ComponentFixture<StudentCRUD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentCRUD]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentCRUD);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

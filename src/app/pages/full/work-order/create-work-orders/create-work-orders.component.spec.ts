import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkOrdersComponent } from './create-work-orders.component';

describe('CreateWorkOrdersComponent', () => {
  let component: CreateWorkOrdersComponent;
  let fixture: ComponentFixture<CreateWorkOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWorkOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateWorkOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

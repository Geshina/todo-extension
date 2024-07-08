import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedTreeComponent } from './completed-tree.component';

describe('CompletedTreeComponent', () => {
  let component: CompletedTreeComponent;
  let fixture: ComponentFixture<CompletedTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletedTreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

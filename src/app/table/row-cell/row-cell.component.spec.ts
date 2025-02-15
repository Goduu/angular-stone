import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowCellComponent } from './row-cell.component';

describe('RowCellComponent', () => {
  let component: RowCellComponent;
  let fixture: ComponentFixture<RowCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowCellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

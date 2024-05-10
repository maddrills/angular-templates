import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropimageComponent } from './dropimage.component';

describe('DropimageComponent', () => {
  let component: DropimageComponent;
  let fixture: ComponentFixture<DropimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropimageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

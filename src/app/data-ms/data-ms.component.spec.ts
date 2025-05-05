import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMSComponent } from './data-ms.component';

describe('DataMSComponent', () => {
  let component: DataMSComponent;
  let fixture: ComponentFixture<DataMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataMSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

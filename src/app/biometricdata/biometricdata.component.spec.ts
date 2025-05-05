import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiometricdataComponent } from './biometricdata.component';

describe('BiometricdataComponent', () => {
  let component: BiometricdataComponent;
  let fixture: ComponentFixture<BiometricdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiometricdataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiometricdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

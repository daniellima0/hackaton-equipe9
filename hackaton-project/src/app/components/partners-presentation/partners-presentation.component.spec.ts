import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersPresentationComponent } from './partners-presentation.component';

describe('PartnersPresentationComponent', () => {
  let component: PartnersPresentationComponent;
  let fixture: ComponentFixture<PartnersPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnersPresentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnersPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

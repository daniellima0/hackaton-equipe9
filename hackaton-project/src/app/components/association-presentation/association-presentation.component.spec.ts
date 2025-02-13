import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationPresentationComponent } from './association-presentation.component';

describe('AssociationPresentationComponent', () => {
  let component: AssociationPresentationComponent;
  let fixture: ComponentFixture<AssociationPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssociationPresentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssociationPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

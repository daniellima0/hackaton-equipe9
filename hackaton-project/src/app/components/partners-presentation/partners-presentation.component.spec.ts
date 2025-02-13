import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartnersPresentationComponent } from './partners-presentation.component';
import { By } from '@angular/platform-browser';

describe('PartnersPresentationComponent', () => {
  let component: PartnersPresentationComponent;
  let fixture: ComponentFixture<PartnersPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnersPresentationComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link to the partner website', () => {
    const partner = component.partenaires[0];
    const websiteLink = fixture.debugElement.query(By.css('.website-link'));
    
    expect(websiteLink.nativeElement.getAttribute('href')).toBe(partner.website);
    expect(websiteLink.nativeElement.textContent).toBe('Visiter le site');
  });

  it('should display all partner names correctly', () => {
    const partnerNames = fixture.debugElement.queryAll(By.css('h3'));
    const partnerNamesText = partnerNames.map(de => de.nativeElement.textContent.trim());
    
    const expectedNames = component.partenaires.map(p => p.nom);
    
    expect(partnerNamesText).toEqual(expectedNames);
  });

  it('should display the partner description correctly', () => {
    const partnerDescription = fixture.debugElement.queryAll(By.css('p'));
    const descriptionsText = partnerDescription.map(de => de.nativeElement.textContent.trim());
    
    const expectedDescriptions = component.partenaires.map(p => p.description);
    
    expect(descriptionsText).toEqual(expectedDescriptions);
  });
});

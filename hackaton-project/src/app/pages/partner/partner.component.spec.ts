import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartnersComponent } from './partner.components';  
import { By } from '@angular/platform-browser';

describe('PartnersComponent', () => {
    let component: PartnersComponent;
    let fixture: ComponentFixture<PartnersComponent>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ PartnersComponent ]
      })
      .compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(PartnersComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('doit créer le composant', () => {
      expect(component).toBeTruthy();
    });
  
    it('doit afficher le bon titre', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const h1 = compiled.querySelector('h1');
      expect(h1?.textContent).toContain('Nos Partenaires');
    });
  
    it('doit afficher la liste des partenaires', () => {
      component.partenaires = [
        { nom: 'Partenaire 1', logo: 'assets/logo1.png', description: 'Description du partenaire 1' },
        { nom: 'Partenaire 2', logo: 'assets/logo2.png', description: 'Description du partenaire 2' },
        { nom: 'Partenaire 3', logo: 'assets/logo3.png', description: 'Description du partenaire 3' }
      ];
      fixture.detectChanges();
  
      const compiled = fixture.nativeElement as HTMLElement;
      const partnerList = compiled.querySelectorAll('div.partenaire');
  
      expect(partnerList.length).toBe(3);
      expect(partnerList[0].querySelector('h3')?.textContent).toContain('Partenaire 1');
      expect(partnerList[1].querySelector('h3')?.textContent).toContain('Partenaire 2');
      expect(partnerList[2].querySelector('h3')?.textContent).toContain('Partenaire 3');
    });
  });

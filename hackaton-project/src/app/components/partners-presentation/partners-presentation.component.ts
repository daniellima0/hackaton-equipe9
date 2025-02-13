import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common'; 

@Component({
  selector: 'app-partenaires',
  templateUrl: './partners-presentation.component.html',
  styleUrls: ['./partners-presentation.component.css'],
  standalone: true,  
  imports: [NgForOf]  
})
export class PartnersPresentationComponent implements OnInit {

  partenaires = [
    { 
      nom: 'Crédit Agricole Technologies et Services', 
      logo: 'assets/logop1.jpg', 
      description: 'Crédit Agricole Technologies et Services est la branche technologique du groupe bancaire Crédit Agricole, l\'un des plus grands groupes bancaires de France. Ils offrent des solutions innovantes en technologie et services numériques pour le secteur financier.',
      website: 'https://www.credit-agricole.com'
    },
    { 
      nom: 'CVEC - Contribution Vie Etudiante et de Campus', 
      logo: 'assets/logop2.png', 
      description: 'La CVEC est une contribution obligatoire des étudiants français, destinée à financer des actions visant à améliorer la vie étudiante et les infrastructures des campus universitaires.',
      website: 'https://cvec.etudiant.gouv.fr/'
    },
    { 
      nom: 'Listic', 
      logo: 'assets/logop3.jpg', 
      description: 'Listic est un laboratoire de recherche de l\'Université Savoie Mont Blanc, spécialisé dans l\'informatique et les sciences du numérique.',
      website: 'https://www.listic.univ-smb.fr'
    },
    { 
      nom: 'NTN', 
      logo: 'assets/logop4.png', 
      description: 'NTN est une entreprise mondiale spécialisée dans la fabrication de roulements et de composants de précision pour diverses industries.',
      website: 'https://www.ntn-snr.com'
    },
    { 
      nom: 'Polytech Annecy-Chambéry', 
      logo: 'assets/logop5.png', 
      description: 'Polytech Annecy-Chambéry est une école d\'ingénieurs située en région Auvergne-Rhône-Alpes, offrant des formations en sciences et technologies pour préparer des ingénieurs dans divers domaines.',
      website: 'https://www.polytech.univ-smb.fr/'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { ChatbotComponent } from "../chatbot/chatbot.component"; 

@Component({
  selector: 'app-partenaires',
  templateUrl: './partners-presentation.component.html',
  styleUrls: ['./partners-presentation.component.css'],
  standalone: true,  
  imports: [NgForOf, ChatbotComponent]  
})
export class PartnersPresentationComponent implements OnInit {

  partenaires = [
    { 
      nom: 'Crédit Agricole Technologies et Services', 
      logo: 'assets/logop1.jpg', 
      description: 'Crédit Agricole Technologies et Services est la branche technologique du groupe bancaire Crédit Agricole, l\'un des plus grands groupes bancaires de France. Ils offrent des solutions innovantes en technologie et services numériques pour le secteur financier, en mettant l\'accent sur la transformation de l\'expérience bancaire et l\'optimisation de la gestion des données et des systèmes bancaires.' 
    },
    { 
      nom: 'CVEC - Contribution Vie Etudiante et de Campus', 
      logo: 'assets/logop2.png', 
      description: 'La CVEC est une contribution obligatoire des étudiants français, destinée à financer des actions visant à améliorer la vie étudiante et les infrastructures des campus universitaires. Elle soutient des projets de bien-être, de santé, d\'accessibilité et d\'autres initiatives bénéficiant aux étudiants dans l\'environnement universitaire.' 
    },
    { 
      nom: 'Listic', 
      logo: 'assets/logop3.jpg', 
      description: 'Listic est un laboratoire de recherche de l\'Université Savoie Mont Blanc, spécialisé dans l\'informatique et les sciences du numérique. Il développe des innovations dans des domaines tels que l\'intelligence artificielle, les réseaux de communication, les systèmes d\'information et les technologies émergentes.' 
    },
    { 
      nom: 'NTN', 
      logo: 'assets/logop4.png', 
      description: 'NTN est une entreprise mondiale spécialisée dans la fabrication de roulements et de composants de précision pour diverses industries, telles que l\'automobile, l\'aérospatiale et le ferroviaire. Elle propose des solutions avancées pour améliorer l\'efficacité et la durabilité des machines et équipements.' 
    },
    { 
      nom: 'Polytech Annecy-Chambéry', 
      logo: 'assets/logop5.png', 
      description: 'Polytech Annecy-Chambéry est une école d\'ingénieurs de l\'Université Savoie Mont Blanc, offrant une formation de haute qualité dans diverses spécialités de l\'ingénierie. L\'école prépare ses étudiants à relever les défis technologiques de demain.' 
    },
    { 
      nom: 'Sopra Steria', 
      logo: 'assets/logop6.png', 
      description: 'Sopra Steria est une entreprise leader dans le domaine du conseil et des services numériques, offrant des solutions pour la transformation numérique, l\'innovation technologique et la gestion des données.' 
    },
    { 
      nom: 'Annecy', 
      logo: 'assets/logop7.png', 
      description: 'Annecy est une ville pittoresque située dans les Alpes françaises, connue pour son lac magnifique, ses montagnes et son architecture historique. Elle est un centre touristique majeur et un lieu de loisirs en plein air.' 
    }
  ];
  

  constructor() { }

  ngOnInit(): void {
  
  }
}

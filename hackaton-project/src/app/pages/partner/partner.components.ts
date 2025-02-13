import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partenaires',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnersComponent implements OnInit {

  partenaires = [
    { nom: 'Partenaire 1', logo: 'assets/logo1.png', description: 'Description du partenaire 1' },
    { nom: 'Partenaire 2', logo: 'assets/logo2.png', description: 'Description du partenaire 2' },
    { nom: 'Partenaire 3', logo: 'assets/logo3.png', description: 'Description du partenaire 3' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

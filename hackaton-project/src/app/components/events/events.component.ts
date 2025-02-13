import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component'; // ✅ Ajout du FormsModule

interface Event {
  date: string;
  title: string;
  description: string;
  category: string;
  details: string;
  showDetails: boolean;
  imageUrl?: string;
}

@Component({
  selector: 'app-events',
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {
  selectedCategory: string = '';
  selectedYear: string = '';
  searchQuery: string = '';
  currentPage: number = 1;
  eventsPerPage: number = 5;

  events: Event[] = [
    {
      date: '03/02/24',
      title: 'Journées Portes Ouvertes',
      description: 'Découvrez Polytech Annecy-Chambéry',
      category: 'Journée Portes Ouvertes',
      details:
        'Découvrez nos campus à Annecy-le-Vieux et au Bourget-du-Lac lors de nos journées portes ouvertes...',
      showDetails: false, // Initial state for details visibility
      imageUrl: 'assets/Portes_ouvertes.png', // Example image URL
    },
    {
      date: '15/02/24',
      title: 'Conférence et Table Ronde',
      description: '"La Place des Femmes dans l\'Industrie et la Construction"',
      category: 'Conférence',
      details:
        "Participez à une conférence inspirante suivie d'une table ronde sur le rôle crucial des femmes...",
      showDetails: false,
      imageUrl: 'assets/Table_ronde.png', // Example image URL
    },
    {
      date: '08/03/24',
      title: 'AfterWork Solidaire',
      description: "Au Charly's Pub",
      category: 'AfterWork',
      details:
        "Rejoignez-nous pour un afterwork convivial au Charly's Pub, dont les bénéfices seront reversés...",
      showDetails: false,
      imageUrl: 'assets/AfterWork.png', // Example image URL
    },
    {
      date: '25/03/24',
      title: 'Rencontres Lycéennes',
      description: 'Inspirez les Futures Ingénieures',
      category: 'Intervention',
      details:
        'Nos membres se rendront dans plusieurs lycées pour des interventions inspirantes...',
      showDetails: false,
      imageUrl: 'assets/accueil_lycée.png', // Example image URL
    },
    {
      date: '16/05/24',
      title: "Ingénieuses'24",
      description: "Prix de l'Engagement Étudiant",
      category: 'Cérémonie',
      details:
        "Célébrez l'engagement et l'innovation lors de la remise des prix Ingénieuses'24...",
      showDetails: false,
    },
    {
      date: '07/11/24',
      title: 'Conférence CATS',
      description: '"La Mixité des Genres dans l\'Ingénierie"',
      category: 'Conférence',
      details:
        "En partenariat avec CATS, cette conférence explorera l'importance de la mixité des genres...",
      showDetails: false,
      imageUrl: 'assets/Conférence_CATS.png', // Example image URL
    },
    {
      date: '04/12/24',
      title: 'Orientation et Inspiration',
      description: 'Présentation au Lycée Saint-Michel',
      category: 'Présentation',
      details:
        "Nous présenterons les métiers de l'ingénierie aux élèves du Lycée Saint-Michel...",
      showDetails: false,
      imageUrl: 'assets/presentation-lycee-saint-michel.png', // Example image URL
    },
    {
      date: '19/12/24',
      title: "AfterWork de Fin d'Année",
      description: "Rencontre avec les membres d'IAF",
      category: 'AfterWork',
      details:
        "Terminez l'année en beauté avec un afterwork spécial réservé aux membres d'Ingénieure Au Féminin. Un moment privilégié pour échanger, réseauter et célébrer nos réussites collectives.",
      showDetails: false,
      imageUrl: 'assets/afterwork-fin-dannee.png', // Example image URL
    },
    {
      date: '21/01/25',
      title: "Visite de l'INES",
      description: 'Découverte des Métiers de la Recherche',
      category: 'Visite',
      details:
        "Les lycéens du Lycée Monge sont invités à visiter l'Institut National de l'Énergie Solaire (INES) pour découvrir les métiers de la recherche. Une journée riche en découvertes et en inspirations pour les futurs scientifiques.",
      showDetails: false,
      imageUrl: 'assets/visite.png', // Example image URL
    },
    {
      date: '13/02/25',
      title: 'Hackathon Innovation et Créativité au Féminin',
      description:
        "Participez à notre hackathon annuel dédié à l'innovation et à la créativité.",
      category: 'Hackathon',
      details:
        'Formez des équipes et relevez des défis technologiques passionnants, tout en développant vos compétences en ingénierie.',
      showDetails: false,
    },
    {
      date: '18/02/25',
      title: 'Ciné-Débat : "Une Femme d\'Exception"',
      description:
        "Projection suivie d'un débat sur les défis rencontrés par les femmes dans les domaines scientifiques et juridiques.",
      category: 'Cinéma',
      details:
        'Assistez à la projection du film "Une Femme d\'Exception", suivie d\'un débat sur les défis rencontrés par les femmes dans les domaines scientifiques et juridiques. Une soirée enrichissante pour échanger et réfléchir ensemble.',
      showDetails: false,
      imageUrl: 'assets/cine-debat.png', // Example image URL
    },
    {
      date: '25/02/25',
      title: 'Exposition : "Veuillez Rendre à Cléopâtre"',
      description:
        "Exposition sur les femmes scientifiques victimes de l'effet Matilda.",
      category: 'Exposition',
      details:
        "Découvrez notre exposition \"Veuillez Rendre à Cléopâtre\", qui met à l'honneur les femmes scientifiques victimes de l'effet Matilda. Une plongée dans l'histoire pour redécouvrir des figures féminines oubliées et leurs contributions majeures.",
      showDetails: false,
      imageUrl: 'assets/cleopatre.png', // Example image URL
    },
  ];

  get eventYears(): string[] {
    return [
      ...new Set(this.events.map((event) => '20' + event.date.split('/')[2])),
    ];
  }

  get eventCategories(): string[] {
    return [...new Set(this.events.map((event) => event.category))];
  }

  shouldShowYear(year: string): boolean {
    return this.selectedYear === '' || this.selectedYear === year;
  }

  getFilteredEvents(year: string): Event[] {
    return this.events
      .filter((event) => '20' + event.date.split('/')[2] === year)
      .filter(
        (event) =>
          this.selectedCategory === '' ||
          event.category === this.selectedCategory
      )
      .filter(
        (event) =>
          event.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          event.description
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
      )
      .slice(
        (this.currentPage - 1) * this.eventsPerPage,
        this.currentPage * this.eventsPerPage
      );
  }

  parseDate(dateStr: string): number {
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(2000 + year, month - 1, day).getTime();
  }

  changePage(direction: number) {
    this.currentPage += direction;
  }

  // Method to get the total number of pages for a given year
  getTotalPages(year: string): number {
    const totalFilteredEvents = this.getFilteredEvents(year).length;
    return Math.ceil(totalFilteredEvents / this.eventsPerPage);
  }

  // Method to navigate to a specific page
  goToPage(page: number): void {
    this.currentPage = page;
  }
}

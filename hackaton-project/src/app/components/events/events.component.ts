import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Ajout du FormsModule

interface Event {
  date: string;
  title: string;
  description: string;
  category: string;
  details: string;
  showDetails: boolean;
  imageUrl: string;
}

@Component({
  selector: 'app-events',
  imports: [CommonModule, FormsModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {
  selectedCategory: string = '';
  selectedYear: string = '';

  events: Event[] = [
    {
      date: '03/02/24',
      title: 'Journées Portes Ouvertes',
      description: 'Découvrez Polytech Annecy-Chambéry',
      category: 'Journée Portes Ouvertes',
      details:
        'Découvrez nos campus à Annecy-le-Vieux et au Bourget-du-Lac lors de nos journées portes ouvertes...',
      showDetails: false, // Initial state for details visibility
      imageUrl: 'assets/images/event1.jpg', // Example image URL
    },
    {
      date: '15/02/24',
      title: 'Conférence et Table Ronde',
      description: '"La Place des Femmes dans l\'Industrie et la Construction"',
      category: 'Conférence',
      details:
        "Participez à une conférence inspirante suivie d'une table ronde sur le rôle crucial des femmes...",
      showDetails: false,
      imageUrl: 'assets/images/event1.jpg', // Example image URL
    },
    {
      date: '08/03/24',
      title: 'AfterWork Solidaire',
      description: "Au Charly's Pub",
      category: 'AfterWork',
      details:
        "Rejoignez-nous pour un afterwork convivial au Charly's Pub, dont les bénéfices seront reversés...",
      showDetails: false,
      imageUrl: 'assets/images/event1.jpg', // Example image URL
    },
    {
      date: '25/03/24',
      title: 'Rencontres Lycéennes',
      description: 'Inspirez les Futures Ingénieures',
      category: 'Intervention',
      details:
        'Nos membres se rendront dans plusieurs lycées pour des interventions inspirantes...',
      showDetails: false,
      imageUrl: 'assets/images/event1.jpg', // Example image URL
    },
    {
      date: '16/05/24',
      title: "Ingénieuses'24",
      description: "Prix de l'Engagement Étudiant",
      category: 'Cérémonie',
      details:
        "Célébrez l'engagement et l'innovation lors de la remise des prix Ingénieuses'24...",
      showDetails: false,
      imageUrl: 'assets/images/event1.jpg', // Example image URL
    },
    {
      date: '07/11/24',
      title: 'Conférence CATS',
      description: '"La Mixité des Genres dans l\'Ingénierie"',
      category: 'Conférence',
      details:
        "En partenariat avec CATS, cette conférence explorera l'importance de la mixité des genres...",
      showDetails: false,
      imageUrl: 'assets/images/event1.jpg', // Example image URL
    },
    {
      date: '04/12/24',
      title: 'Orientation et Inspiration',
      description: 'Présentation au Lycée Saint-Michel',
      category: 'Présentation',
      details:
        "Nous présenterons les métiers de l'ingénierie aux élèves du Lycée Saint-Michel...",
      showDetails: false,
      imageUrl: 'assets/images/event1.jpg', // Example image URL
    },
  ];

  get eventYears(): string[] {
    return [
      ...new Set(this.events.map((event) => '20' + event.date.split('/')[2])),
    ].sort();
  }

  get eventCategories(): string[] {
    return [...new Set(this.events.map((event) => event.category))].sort();
  }

  shouldShowYear(year: string): boolean {
    return this.selectedYear === '' || this.selectedYear === year;
  }

  getFilteredEvents(year: string): Event[] {
    return this.events.filter(
      (event) =>
        '20' + event.date.split('/')[2] === year &&
        (this.selectedCategory === '' ||
          event.category === this.selectedCategory)
    );
  }
}

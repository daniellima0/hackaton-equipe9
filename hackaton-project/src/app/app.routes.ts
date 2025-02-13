import { Routes } from '@angular/router';
import { AssociationPresentationComponent } from './components/association-presentation/association-presentation.component';
import { PartnersPresentationComponent } from './components/partners-presentation/partners-presentation.component';
import { EventsComponent } from './components/events/events.component';


export const routes: Routes = [
  {
    path: '',
    component: AssociationPresentationComponent,
    title: 'AssociationPresentation',
  },
  {
    path: 'partners',
    component: PartnersPresentationComponent,
    title: 'PartnersPresentation',
  },
  { path: 'events', component: EventsComponent, title: 'Events' },
];

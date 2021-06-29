import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/error404/error404.component';
import { EventRouteActivatorGuard } from './events/guard/event-route-activator.guard';
import { EventListResolver} from './events/events-list-resolver.service';

export const appRoutes: Routes = [
  { path : 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path : 'events', component: EventsListComponent, resolve: {events : EventListResolver} },
  { path : 'events/:id', component : EventDetailsComponent, canActivate : [EventRouteActivatorGuard]},
  { path : '404', component: Error404Component },
  { path : '', redirectTo: '/events', pathMatch: 'full'}
];

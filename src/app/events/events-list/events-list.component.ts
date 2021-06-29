import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../../services/common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/event.model';


@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  // services start getting injected in component
  events: IEvent[] = [];
  constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {
   }

  ngOnInit(): void{
    this.events = this.route.snapshot.data['events'];
  }
  // end services

  handleThumbnailClick(eventName: any): void{
    this.toastr.success(eventName);
  }
}

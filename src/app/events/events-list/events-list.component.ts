import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../../services/common/toastr.service';



@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  // services start getting injected in component
  events: any[] = [];
  constructor(private eventService: EventService, private toastr: ToastrService) {
   }

  ngOnInit(): void{
    this.events = this.eventService.getEvents();
  }
  // end services

  handleThumbnailClick(eventName: any): void{
    this.toastr.success(eventName);
  }
}

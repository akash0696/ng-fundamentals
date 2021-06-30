import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from '../shared/event.model';



@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input()
  event!: IEvent;
  // ngClass condition
  getStartTimeClass(): string[]{
    if (this.event && this.event.time === '8:00 am') {
      return ['green', 'bold'];
    }
    if (this.event && this.event.time === '10:00 am') {
      return ['blue', 'bold'];
    }
    return['red', 'bold'];
  }

  // ngSwitch condition
  getStartPriceStyle(): any{
    if (this.event && this.event.price < 780) {
      return {color : '#8e5dc2', 'font-weight': 'bold'};
    }
    return {color : '#9ea53b', 'font-weight': 'bold'};
  }


  ngOnInit(): void {
  }

}

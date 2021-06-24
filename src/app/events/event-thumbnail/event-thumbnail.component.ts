import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: any;
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
  ngOnInit(): void {
  }

}

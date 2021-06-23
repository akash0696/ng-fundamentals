import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: any;
  // Template reference variable from child to parent
  someName: any = 'AKash';
  constructor() { }
  // Template reference variable from parent to child
  logFoo(): void{
    console.log('Hello foo');
  }

  ngOnInit(): void {
  }

}

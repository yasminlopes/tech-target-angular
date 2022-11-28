import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {
  @Input() public publicacao : any;
  @Input() public isCompany : any;
  @Output() onReaction = new EventEmitter();
  p: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}

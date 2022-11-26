import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {
  @Input() public publicacao: any;

  constructor() { }

  ngOnInit(): void {
  }

}

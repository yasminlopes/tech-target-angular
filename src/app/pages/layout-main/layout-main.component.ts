import { Component, OnInit } from '@angular/core';
import { UserLoggedService } from 'src/app/shared/services/user-logged/user-logged.service';

@Component({
  selector: 'app-layout-main',
  templateUrl: './layout-main.component.html',
  styleUrls: ['./layout-main.component.scss']
})
export class LayoutMainComponent implements OnInit {

  constructor(
    public userLoggedService: UserLoggedService
  ) { }

  ngOnInit(): void {
  }

}

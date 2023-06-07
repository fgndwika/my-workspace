import { APP_BASE_HREF } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-two',
  templateUrl: './app-two.component.html',
  styleUrls: ['./app-two.component.scss']
})
export class AppTwoComponent implements OnInit {

  constructor(@Inject(APP_BASE_HREF) readonly baseHref: string) { }

  ngOnInit(): void {
  }

}

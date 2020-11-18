import { Component, OnInit } from '@angular/core';

declare var require: any


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private headerLogo = require('../../../../assets/imgs/suchSoftwareNoBg.png')

  constructor() { }

  ngOnInit(): void {
  }

}

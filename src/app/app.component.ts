import { Component, OnChanges, AfterViewInit, AfterViewChecked, AfterContentChecked, AfterContentInit, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

import { MenuModel } from './shared/models/menu.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  menus: MenuModel[] = [
    { url: 'code-europe', name: 'code-europe' },
    { url: 'publications', name: 'publications' },
  ];

  constructor() {

  }

  ngOnInit() {
  }


}

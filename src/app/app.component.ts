import { Component, OnChanges, AfterViewInit, AfterViewChecked, AfterContentChecked, AfterContentInit, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, AfterViewInit, AfterViewChecked, AfterContentChecked, AfterContentInit, OnDestroy, OnInit {
  title: string = 'app';
  showContent: boolean = false;

  welcomeList: string[] = [];

  constructor() {
    console.log('constructor');

    for (let i = 0; i < 10; i++) {
      this.welcomeList.push(`Witamy na codeeurope poraz ${i + 1}`);
    }
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnChanges(changes: any): void {
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}

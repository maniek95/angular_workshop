import { Component } from '@angular/core';
import { OnInit, OnDestroy, OnChanges, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, OnChanges, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {

  title: string = 'app';
  showContent: boolean = false;

  welcomeList: string[] = [];

  constructor() {
    this.print('constructor');
    for (let i = 0; i < 10; i++) {
      this.welcomeList.push(`Witaj na code europe ${i + 1} gościu`);
    }
  }

  ngAfterViewInit(): void {
    this.print('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.print('ngAfterViewChecked');
  }

  ngAfterContentInit(): void {
    this.print('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    this.print('ngAfterContentChecked');
  }

  ngOnChanges(changes: any): void {
    this.print('ngOnChanges');
  }

  ngOnDestroy(): void {
    this.print('ngOnDestroy');
  }

  ngOnInit(): void {
    this.print('ngOnInit');
  }

  private print(from: string) {
    console.log(from);
  }

}

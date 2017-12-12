import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'app';
  showContent: boolean = false;

  welcomeList: string[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.welcomeList.push(`Witaj na code europe ${i + 1} gościu`);
    }
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showContent: boolean = false;

  welcomeList: string[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.welcomeList.push(`Witamy na codeeurope poraz ${i + 1}`);
    }
  }
}

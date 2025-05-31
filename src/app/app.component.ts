import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div class="app">
    <header class="header">
      <img class="logo" src="/assets/img/logo.svg" alt="Ultimate Donuts">
    </header>
    <app-donut-list></app-donut-list>
  </div>
  `,
  styles: [
    `
      .app {
        background: #fff;
        border-radius: 8px;
        max-width: 400px;
        width: 94%;
        margin: 25px auto;
        padding: 25px;
        border: 4px solid #ef9fc
      }
      .header {
        display: flex;
        justify-content: center;
        margin-bottom: 25px;
      }
      .logo{
        width: 100px;
        height: 88px;
        
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  message!: string;
  newMessage!: string;

  ngOnInit() {
    this.message = 'Hello World!'
  }

  handleClick(event: Event) {
    console.log('Clicked');

  }

}

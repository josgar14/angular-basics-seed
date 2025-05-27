import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div class="app">{{message.length ? message : 'Nothing here...'}}</div> 
  <h1 (click)="handleClick($event)" >{{ newMessage }}</h1>
  <input [value]="message" (input)="handleInput($event)">
  `,
  styles: [
    `
      .app {
        margin-top: 50px;
        font-size: 22px;
        color: #fff;
        text-align: center;
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

  handleInput(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.newMessage = value;

  }
}

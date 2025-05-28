import { Component } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-list',
  template: `
    <div>
      <div>
        {{donut.name}}
        {{donut.price}}
      </div>
    </div>
  `,
  styles: [
  ]
})
export class DonutListComponent {
  donut!: Donut;
  donuts!: Donut[];

  ngOnInit(): void {

    this.donuts = [
      {
        id: '5545',
        name: 'Just Chocolate',
        icon: 'just-chocolate',
        price: 199,
        description: 'For the pure chocoholic'
      },
      {
        id: '23333',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 129,
        description: 'Sticky perfection'
      },
      {
        id: '1234',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 139,
        description: 'Chocolate drizzled with caramel'
      }
    ];
    this.donut = this.donuts[0];
  }
}

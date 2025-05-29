import { Component } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-list',
  template: `
    <div>
      <app-donut-card [donut]="donuts[0]"></app-donut-card>
      <app-donut-card [donut]="donuts[1]"></app-donut-card>
      <app-donut-card [donut]="donuts[2]"></app-donut-card>
    </div>
  `,
  styles: [],
})
export class DonutListComponent {
  donuts!: Donut[];

  ngOnInit(): void {
    this.donuts = [
      {
        id: '5545',
        name: 'Just Chocolate',
        icon: 'just-chocolate',
        price: 199,
        description: 'For the pure chocoholic',
      },
      {
        id: '23333',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 129,
        description: 'Sticky perfection',
      },
      {
        id: '1234',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 139,
        description: 'Chocolate drizzled with caramel',
      },
    ];
  }
}

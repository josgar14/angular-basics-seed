import { Component } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-list',
  template: `
    <div>

      <ng-container *ngIf="donuts.length; else nothing">
        <app-donut-card *ngFor="let donut of donuts; trackBy: trackById; index as i" [donut]="donut">
          
        </app-donut-card>

        <ng-template ngFor [ngForOf]="donuts" let-donut let-i="index">
          <app-donut-card [donut]="donut">
          </app-donut-card>
        </ng-template>

      </ng-container>

      <ng-template #nothing>
        <p>No donuts here...</p>
      </ng-template>
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
        promo: 'limited',
        description: 'For the pure chocoholic',
      },
      {
        id: '23333',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 129,
        promo: 'new',
        description: 'Sticky perfection',
      },
      {
        id: '1234',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 139,
        description: 'Chocolate drizzled with caramel',
      }, {
        id: '23424',
        name: 'Sour Supreme',
        icon: 'sour-supreme',
        price: 233,
        description: 'For the sour advocate.',
      }, {
        id: 'fdfsdf',
        name: 'Zesty Lemon',
        icon: 'zesty-lemon',
        price: 123,
        description: 'Delicious lucios lemon.',
      },
    ];
  }
  trackById(index: number, value: Donut) {
    return value.id;
  }
}

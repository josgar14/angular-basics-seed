import { Injectable } from '@angular/core';
import { Donut } from '../models/donut.model';

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  private donuts: Donut[] = [
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

  constructor() { }

  read() {
    return this.donuts;
  }

  readOne(id: string) {
    const donut = this.read().find((donut: Donut) => donut.id === id);

    if (donut) {
      return donut;
    }

    return { name: '', icon: '', price: 0, description: '' };
  }
}

import { Component } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'app-donut-list',
  template: `
    <div>

      <ng-container *ngIf="donuts.length; else nothing">
        <app-donut-card *ngFor="let donut of donuts; trackBy: trackById; index as i" [donut]="donut">
          
        </app-donut-card>

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

  constructor(private donutService: DonutService){}

  ngOnInit(): void {
    this.donuts = this.donutService.read();
  }
  trackById(index: number, value: Donut) {
    return value.id;
  }
}

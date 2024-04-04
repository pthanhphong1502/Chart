import { Injectable } from '@angular/core';
import { Vertical } from './vertical.model';

@Injectable({
  providedIn: 'root'
})
export class VerticalService {
  private verticals: Vertical[] = [
    {
      name: 'BACK OFFICE',
      categories: [
        { name: 'BOD', total: 30, malePercentage: 80, femalePercentage: 20 },
        { name: 'DC2', total: 30, malePercentage: 80, femalePercentage: 20 },
        { name: 'DC2', total: 30, malePercentage: 80, femalePercentage: 20 },
      ],
      isCollapsed: true,
    },
    {
      name: 'DXY',
      categories: [
        { name: 'BOD', total: 30, malePercentage: 80, femalePercentage: 20 },
        { name: 'DC2', total: 30, malePercentage: 80, femalePercentage: 20 },

      ],
      isCollapsed: true,
    },
    {
      name: 'ABC',
      categories: [
        { name: 'BOD', total: 30, malePercentage: 80, femalePercentage: 20 },
        { name: 'DC2', total: 30, malePercentage: 80, femalePercentage: 20 },

      ],
      isCollapsed: true,
    },
];

  constructor() { }

  getDepartments(): Vertical[] {
    return this.verticals;
  }
}

import { Component, OnInit } from '@angular/core';
import { Vertical } from './vertical.model';
import { VerticalService } from './vertical.service';

@Component({
  selector: 'lib-vertical',
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.css'],
  providers: [VerticalService]
})
export class VerticalComponent implements OnInit {
  verticals!: Vertical[];

  constructor(private verticalService: VerticalService) { }

  ngOnInit(): void {
    this.verticals = this.verticalService.getDepartments();
  }

  toggleCollapse(vertical: Vertical): void {
    vertical.isCollapsed = !vertical.isCollapsed;
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerticalChartComponent } from './dashboard/vertical.component';


const routes: Routes = [
  { path: 'vertical', component: VerticalChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

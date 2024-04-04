import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerticalComponent } from './dashboard/vertical.component';


const routes: Routes = [
  { path: 'vertical', component: VerticalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

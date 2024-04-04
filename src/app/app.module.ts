import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { TreeViewAllModule, TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { VerticalComponent } from './dashboard/vertical.component';

@NgModule({
  declarations: [
    AppComponent,
    VerticalComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    AppRoutingModule,
    TreeViewModule,
    GridModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

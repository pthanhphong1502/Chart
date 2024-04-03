import { Component, ViewEncapsulation } from '@angular/core';
import { ILoadedEventArgs, Series, ChartTheme, ChartAllModule } from '@syncfusion/ej2-angular-charts';
import { getElement } from '@syncfusion/ej2-charts';
import { Browser } from '@syncfusion/ej2-base';

/**
 * Sample for vertical chart
 */
@Component({
    selector: 'control-content',
    templateUrl: 'vertical.component.html',
    styleUrls: ['vertical.component.css'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [ChartAllModule]
})
export class VerticalChartComponent {
    public clrInterval: number = 0;

    public data1: Object[] = [
      { Year: "BACK OFFICE", column: 240 },
            { Year: "BOD", column: 125 },
            { Year: "DC2", column: 45 },
            { Year: "KTC", column: 70 },
            { Year: "Phần mềm DX", column: 150 },
            { Year: "DXC", column: 60 },
            { Year: "DXS", column: 90 },
            { Year: "Trung tâm CDC", column: 180 },
            { Year: "HCS", column: 80 },
            { Year: "ERP", column: 100 },
          ];

    //Initializing Primary X Axis
    public primaryXAxis: Object = {
         majorGridLines: { width: 0 } , valueType: 'Category', majorTickLines: {width: 0}, minorTickLines: {width: 0}
    };
    //Initializing Primary Y Axis
    public primaryYAxis: Object = {
        title: 'Sales in Billion',edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 }, minimum: 0 , maximum: 250 , interval: 50, lineStyle:{width: 0},majorTickLines: {width: 0}
    };
    public marker: Object = {
        visible: true,
        width: 7, height: 7, isFilled: true
    };
    public tooltip: Object = {
        enable: true
    };
    public legendSettings: Object = {
        visible: false
    };
    public chartArea: Object = {
        border: {
            width: 0
        }
    };
     // custom code start
    public width: string = Browser.isDevice ? '100%' : '75%';
    public load(args: ILoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');
    }
     // custom code end
    public vertical: boolean = true;
    public count: number = 0;

    public axis: Object = [{
        majorGridLines: { width: 0 }, title:'Profit(In Percentage)',
        majorTickLines:{width: 0},
        opposedPosition: true,
        lineStyle: { width: 0 },
        minimum: 0, maximum: 4, interval: 0.5,
        edgeLabelPlacement: 'Shift',
        name: 'yAxis2',
        labelFormat: '{value}%'
    }];

    public title: string = 'Sales Vs Profit Margins';
    constructor() {
        //code
     };

}

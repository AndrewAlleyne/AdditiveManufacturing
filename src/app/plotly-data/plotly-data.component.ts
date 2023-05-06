import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
// import { HeaderComponent } from '@coreui/angular';
import { PlotlyService } from 'angular-plotly.js';
import { FormBuilder, UntypedFormBuilder } from '@angular/forms';

type PieChart = {
    data: {
        values: number[];
        labels: string[];
        type: string;
        automargin: boolean;
    }[];
    layout: any;
};
type DonutPieChart = {
    data: {
        values: number[];
        labels: string[];
        textposition: string;
        name: string;
        type: string;
        hole: number;
        automargin: boolean;
    }[];
    layout: any;
};

type Graphs = {
    [key: string]: PieChart;
}[];

@Component({
    selector: 'plotly-do',
    templateUrl: './plotly-data.component.html',
})
//implements AfterViewInit
export class PlotlyDataComponent {
    @ViewChild('plotlyChart', { static: false }) plotlyChartRef!: ElementRef;

    //Local storage stores the data
    itemList: PieChart[] = [];

    btnCheckGroup = this.formBuilder.group({
        option1: [],
        option2: [],
        option3: [],
        option4: [],
    });

    constructor(
        private plotlyService: PlotlyService,
        private formBuilder: FormBuilder,
    ) {
        // super();
        // console.log(this.itemList);
    }

    // Options bar values
    // TODO Revise function
    setValue(controlName: string) {
        console.log(controlName);
        const prevValue = this.btnCheckGroup.get(controlName)?.value;
        const groupValue = this.btnCheckGroup.getRawValue();
        const newGroupValue = { ...groupValue, [`${controlName}`]: !prevValue };
        this.btnCheckGroup.setValue(newGroupValue);
        console.log(this.btnCheckGroup.value);
    }

    // Sticky scroll options bar
    stickyPosition = '0px';
    private debounceTimeout: number = 0;
    @HostListener('window:scroll', [])
    onWindowScroll() {
        // If debounceTimeout is not null, clear the previous timeout
        if (this.debounceTimeout) {
            window.clearTimeout(this.debounceTimeout);
        }

        // Set a new timeout to update the sticky position after 10 milliseconds
        this.debounceTimeout = window.setTimeout(() => {
            // Calculate the current position of the window
            const windowScroll =
                window.scrollY ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0;

            // Set the position of the sticky div to be the current window position
            this.stickyPosition = `${windowScroll}px`;
        }, 3);
    }

    // Adds graph to view
    addGraph(event: any) {
        console.log('User wanted', event.target.textContent);
        let graphType = event.target.textContent;
        this.itemList.push(this.buildGraph(graphType));
    }

    buildGraph(graphType: string): PieChart | DonutPieChart {
        console.log('Got ,  ', graphType);
        if (graphType == 'Pie Chart') {
            return {
                data: [
                    {
                        values: [19, 26, 55],
                        labels: ['Residential', 'Non-Residential', 'Utility'],
                        type: 'pie',
                        automargin: true,
                    },
                ],
                //  layout.newshape.label
                layout: {
                    autosize: true,
                    graphTitle: 'Pie Chart',
                    margin: { t: 0, b: 0, l: 0, r: 0 },
                    showlegend: true,
                    legend: {
                        x: 0,
                        y: -0.2,
                        yanchor: 'bottom',
                    },
                },
            };
        } else {
            return {
                data: [
                    {
                        values: [19, 26, 55],
                        labels: ['Residential', 'Non-Residential', 'Utility'],
                        type: 'pie',
                        automargin: true,
                        name: 'Something',
                        textposition: 'inside',
                        hole: 0.4,
                    },
                ],
                //  layout.newshape.label
                layout: {
                    autosize: true,
                    graphTitle: 'Pie Chart',
                    margin: { t: 0, b: 0, l: 0, r: 0 },
                    showlegend: true,
                    legend: {
                        x: 0,
                        y: -0.2,
                        yanchor: 'bottom',
                    },
                },
            };
        }
    }
}

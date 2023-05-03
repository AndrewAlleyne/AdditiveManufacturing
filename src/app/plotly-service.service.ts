import { Injectable } from '@angular/core';
// Instantiated once in the Angular Heap 
@Injectable({
  providedIn: 'root'
})
export class PlotlyServiceService {

  constructor() { }

  //  Went with components instead


}



// export class PlotlyExampleComponent {
//   public graph = {
//     data: [
//       { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: { color: 'red' } },
//       { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
//     ],
//     layout: { width: 320, height: 240, title: 'A Fancy Plot' }
//   };
// }
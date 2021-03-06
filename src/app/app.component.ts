import {AfterViewInit, Component} from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';

  ngAfterViewInit(): void {
    jQuery('#world-map').vectorMap({
      backgroundColor: '',
      regionStyle: {
        initial: {
          fill: 'white',
          'fill-opacity': 1,
          stroke: 'black',
          'stroke-width': 1,
          'stroke-opacity': 1
        }
      }
    });
  }
}

import { Component } from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data: any;

  constructor(private dataService: DataService) {
    dataService.getData().subscribe(r => this.data = r);
  }
}

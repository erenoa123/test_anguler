import { Component } from '@angular/core';

@Component({
  selector: 'app-erangel',
  templateUrl: './erangel.component.html',
  styleUrls: ['./erangel.component.scss']
})
export class ErangelComponent {
  markOnMap(event: any): void {
    console.log(event);
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-angular-stone',
  standalone: true,
  imports: [],
  templateUrl: './angular-stone.html',

})
export class AngularStoneComponent {
  @Input() class: string = '';
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-delete',
  standalone: true,
  templateUrl: './delete.icon.html',
})
export class IconDeleteComponent {
  @Input() class: string = '';
}
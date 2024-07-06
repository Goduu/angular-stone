import { Component } from '@angular/core';
import { AngularStoneComponent } from "../angular-stone/angular-stone.component";

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <div class="flex items-center">  
    <app-angular-stone ></app-angular-stone>
      <p class="font-semibold text-4xl">
        Angular Stone
      </p>
  </div>
  `,
  imports: [AngularStoneComponent]
})
export class HeaderComponent {

}

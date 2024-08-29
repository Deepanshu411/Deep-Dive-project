import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { DashboardComponentsComponent } from "./dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, DashboardComponentsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  
  
}

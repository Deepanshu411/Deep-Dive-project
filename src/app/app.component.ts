import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { SupportTicketsComponent } from './dashboard/support-tickets/support-tickets.component';
import { TrafficComponentComponent } from './dashboard/traffic-component/traffic-component.component';
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ServerStatusComponent, SupportTicketsComponent, TrafficComponentComponent, DashboardItemComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  
  
}

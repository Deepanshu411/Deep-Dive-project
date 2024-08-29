import { Component } from '@angular/core';
import { ServerStatusComponent } from "./server-status/server-status.component";
import { TrafficComponentComponent } from "./traffic-component/traffic-component.component";
import { SupportTicketsComponent } from "./support-tickets/support-tickets.component";

@Component({
  selector: 'app-dashboard-components',
  standalone: true,
  imports: [ServerStatusComponent, TrafficComponentComponent, SupportTicketsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponentsComponent {

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-external-booking-button',
  templateUrl: './external-booking-button.component.html',
  styleUrl: './external-booking-button.component.css'
})
export class ExternalBookingButtonComponent {
  @Input() bookingUrl!: string;
  @Input() disclaimerMsg?: string;
}

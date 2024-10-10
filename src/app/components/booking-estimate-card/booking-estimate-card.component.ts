import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-booking-estimate-card',
  templateUrl: './booking-estimate-card.component.html',
  styleUrl: './booking-estimate-card.component.css'
})
export class BookingEstimateCardComponent {
  @Input() packageTitle!: string;
  @Input() packagePrice!: number;
  @Input() packageUrlFrag!: string;
  @Input() vehicleSize!: string;
  @Input() packageClass!: string;
}

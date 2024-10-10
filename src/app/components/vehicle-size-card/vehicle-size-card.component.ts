import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vehicle-size-card',
  templateUrl: './vehicle-size-card.component.html',
  styleUrl: './vehicle-size-card.component.css'
})
export class VehicleSizeCardComponent {
  @Input() vehicleSize!: string;
  @Input() vehicleEx!: string;
  @Input() shortSize!: string;
  toggle?: boolean = false;
}

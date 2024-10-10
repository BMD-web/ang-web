import { Component, Input } from '@angular/core';
import { EstimateCard } from '../../interfaces/estimate-card';

@Component({
  selector: 'app-estimate-card',
  templateUrl: './estimate-card.component.html',
  styleUrl: './estimate-card.component.css'
})
export class EstimateCardComponent implements EstimateCard {
  @Input() estimatedTime!: string;
  @Input() estimatedCost!: number;
  @Input() packageTier!: string;
  @Input() serviceType!: string;
  @Input() isModal!: boolean;
  @Input() disclaimerMsg?: string;
  @Input() bookingUrl?: string;

  modalId!: string;

  ngOnInit() {
    this.modalId = this.serviceType + "-modal";
  }
}

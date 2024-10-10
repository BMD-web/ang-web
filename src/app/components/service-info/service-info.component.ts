import { Component, Input } from '@angular/core';
import { DescriptionCardComponent } from '../description-card/description-card.component';
import { EstimateCardComponent } from '../estimate-card/estimate-card.component';
import { EstimateCard } from '../../interfaces/estimate-card';

@Component({
  selector: 'app-service-info',
  templateUrl: './service-info.component.html',
  styleUrl: './service-info.component.css'
})
export class ServiceInfoComponent {
  @Input() description!: DescriptionCardComponent;
  @Input() estimate!: EstimateCard;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-description-card',
  templateUrl: './description-card.component.html',
  styleUrl: './description-card.component.css'
})
export class DescriptionCardComponent {
  @Input() packageName!: string;
  @Input() packageTier!: string;
  @Input() packageSubtitle?: string;
  @Input() features!: string[];
}

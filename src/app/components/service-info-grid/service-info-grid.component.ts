import { Component, Input, inject } from '@angular/core';
import { ServiceInfoService } from '../../services/service-info.service';
import { ServiceInfoComponent } from '../service-info/service-info.component';
import { DescriptionCardComponent } from '../description-card/description-card.component';
import { EstimateCardComponent } from '../estimate-card/estimate-card.component';
import { EstimateCard } from '../../interfaces/estimate-card';

@Component({
  selector: 'app-service-info-grid',
  templateUrl: './service-info-grid.component.html',
  styleUrl: './service-info-grid.component.css'
})
export class ServiceInfoGridComponent {
  @Input() serviceType!: string; //i.e., interior or exterior
  protected infoService: ServiceInfoService = inject(ServiceInfoService);
  @Input() relInfo?: string;
  services!: ServiceInfoComponent[];
  isModal: boolean = true;


  descriptions: DescriptionCardComponent[] = [];
  estimates: EstimateCard[] = [];

  ngOnInit() {
    if (this.serviceType === 'interior') {
      this.services = this.infoService.getInteriorServices();
    } else if (this.serviceType === 'exterior') {
      this.services = this.infoService.getExteriorServices();
    } else {
      this.services = [];
    }
    this.services.forEach(element => {
      this.descriptions.push(element.description);
      this.estimates.push(element.estimate);
    });
  }

}

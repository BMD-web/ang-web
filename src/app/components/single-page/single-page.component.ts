import { Component, inject } from '@angular/core';
import { SingleService } from '../../interfaces/single-service';
import { SingleServiceService } from '../../services/single-service.service';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrl: './single-page.component.css'
})
export class SinglePageComponent {
  protected serviceService: SingleServiceService = inject(SingleServiceService);

  interiorServices: SingleService[] = this.serviceService.getInteriorSingles();
  exteriorServices: SingleService[] = this.serviceService.getExteriorSingles();
  engineServices: SingleService[] = this.serviceService.getEngineSingles();
}

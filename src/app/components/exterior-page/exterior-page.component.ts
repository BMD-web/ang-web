import { Component } from '@angular/core';

@Component({
  selector: 'app-exterior-page',
  templateUrl: './exterior-page.component.html',
  styleUrl: './exterior-page.component.css'
})
export class ExteriorPageComponent {
  msga: string = "Clients must provide a water hookup for all exterior detailing services.";
  ida: string = "exterior-modal";
  tp: string = "exterior";
  pu: string = "exterior.jpeg";
  tt: string = "Exterior Detailing";
  st: string = "Transform your car's appearance with a service designed to bring a revitalized shine right to your driveway.";
}

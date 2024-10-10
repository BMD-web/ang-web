import { Component } from '@angular/core';

@Component({
  selector: 'app-interior-page',
  templateUrl: './interior-page.component.html',
  styleUrl: './interior-page.component.css'
})
export class InteriorPageComponent {
  msga: string = "Clients must provide a power hookup for all interior detailing services. Clients must also remove all personal belongings from inside the vehicle before their appointment.";
  ida: string = "interior-modal";
  tp: string = "interior";
  pu: string = "rearseat.jpeg";
  tt: string = "Interior Detailing";
  st: string = "Refresh your ride with a detailing service designed to clean, restore, and protect the interior surfaces of your vehicle.";

}

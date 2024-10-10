import { Injectable } from '@angular/core';
import { VehicleSizeCardComponent } from '../components/vehicle-size-card/vehicle-size-card.component';

@Injectable({
  providedIn: 'root'
})
export class VehicleSizeService {

  protected vehicleSizes: VehicleSizeCardComponent[] = [
    {
      vehicleSize: "x-small",
      vehicleEx: "coupe, MINI, smart car",
      shortSize: "xs",
    },
    {
      vehicleSize: "small",
      vehicleEx: "sedan, small SUV, hatchback",
      shortSize: "s",
    },
    {
      vehicleSize: "medium",
      vehicleEx: "wagon, single-cab pickup, mid-size SUV",
      shortSize: "m",
    },
    {
      vehicleSize: "large",
      vehicleEx: "full-size SUV, extended-cab pickup",
      shortSize: "l",
    },
    {
      vehicleSize: "x-large",
      vehicleEx: "crew-cab pickup, large SUV, work van",
      shortSize: "xl",
    }
  ];

  getVehicleSizes(): VehicleSizeCardComponent[] {
    return this.vehicleSizes;
  }
}

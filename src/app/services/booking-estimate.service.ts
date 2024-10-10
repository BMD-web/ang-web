import { Injectable } from '@angular/core';
import { BookingEstimateCardComponent } from '../components/booking-estimate-card/booking-estimate-card.component';

import * as serviceData from '../../assets/service-data.json';

@Injectable({
  providedIn: 'root'
})
export class BookingEstimateService {
  private data: any = (serviceData as any).default;

  initLoop(item: any): BookingEstimateCardComponent {
    var tmp = item.Id.split("\-")[0];
    return {
      packageTitle: item.Title,
      vehicleSize: item.VehicleSize,
      packagePrice: item.Price,
      packageUrlFrag: item.Id,
      packageClass: tmp
    }
  }

  getInteriorEstimates(): BookingEstimateCardComponent[] {
    var intEsts: BookingEstimateCardComponent[] = [];
    this.data.forEach((item: any) => {
      if (item.Type === "interior") {
        var tmp: BookingEstimateCardComponent = this.initLoop(item);
        intEsts.push(tmp);
      }
    });
    return intEsts;
  }

  getInteriorEstimatesBySize(shortSize: string): BookingEstimateCardComponent[] {
    var intEsts = this.getInteriorEstimates();
    return intEsts.filter((bmdService) => bmdService.vehicleSize === shortSize);
  }

  getExteriorEstimates(): BookingEstimateCardComponent[] {
    var intEsts: BookingEstimateCardComponent[] = [];
    this.data.forEach((item: any) => {
      if (item.Type === "exterior") {
        var tmp: BookingEstimateCardComponent = this.initLoop(item);
        intEsts.push(tmp);
      }
    });
    return intEsts;
  }

  getExteriorEstimatesBySize(shortSize: string): BookingEstimateCardComponent[] {
    var intEsts = this.getExteriorEstimates();
    return intEsts.filter((bmdService) => bmdService.vehicleSize === shortSize);
  }
}

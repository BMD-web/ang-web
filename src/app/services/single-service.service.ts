import { Injectable } from '@angular/core';

import * as singleData from '../../assets/single-service.json';
import { SingleService } from '../interfaces/single-service';
import { SingleServiceComponent } from '../components/single-service/single-service.component';

@Injectable({
  providedIn: 'root'
})
export class SingleServiceService {
  private data: any = (singleData as any).default;

  initLoop(item: any): SingleService {
    return {
      name: item.name,
      price: item.price,
      type: item.type,
      time: item.time,
      dependents: item.dependents,
      dependsOn: item.dependsOn,
      disabledTooltip: item.disabledTooltip,
      isDisabled: item.isDisabled,
      isInCart: false
    };
  }

  getInteriorSingles(): SingleService[] {
    var intEsts: SingleService[] = [];
    this.data.forEach((item: any) => {
      if (item.type === "interior") {
        var tmp: SingleService = this.initLoop(item);
        intEsts.push(tmp);
      }
    });
    return intEsts;
  }

  getExteriorSingles(): SingleService[] {
    var extEsts: SingleService[] = [];
    this.data.forEach((item: any) => {
      if (item.type === "exterior") {
        var tmp: SingleService = this.initLoop(item);
        extEsts.push(tmp);
      }
    });
    return extEsts;
  }

  getEngineSingles(): SingleService[] {
    var intEsts: SingleService[] = [];
    this.data.forEach((item: any) => {
      if (item.type === "engine") {
        var tmp: SingleService = this.initLoop(item);
        intEsts.push(tmp);
      }
    });
    return intEsts;
  }

  constructor() { }
}

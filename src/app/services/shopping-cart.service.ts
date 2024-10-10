import { Injectable, inject } from '@angular/core';
import { SingleServiceService } from './single-service.service';
import { SingleService } from '../interfaces/single-service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private singleService: SingleServiceService = inject(SingleServiceService);
  private allItems: SingleService[] = [];
  private currentCart: SingleService[] = [];
  
  ngOnInit() {
    var tmp = this.singleService.getEngineSingles();
    var tmp2 = this.singleService.getExteriorSingles();
    var tmp3 = this.singleService.getInteriorSingles();
    this.addToAll(tmp);
    this.addToAll(tmp2);
    this.addToAll(tmp3);
  }

  private addToAll(itemList: SingleService[]) {
    itemList.forEach((item) => {
      this.allItems.push(item);
    });
  }

  addToCart(item: SingleService) {
    this.currentCart.push(item);
  }

  constructor() { }
}

import { Component } from '@angular/core';
import { SingleService } from '../../interfaces/single-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  currentItems!: SingleService[];
  totalCost!: number;
  time!: string;
}

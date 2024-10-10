import { Component, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-booking-button',
  templateUrl: './booking-button.component.html',
  styleUrl: './booking-button.component.css'
})
export class BookingButtonComponent {
  @Input() modalId!: string;
  constructor(protected modalService: ModalService) { };

}

import { Component, OnDestroy, OnInit, Input, ElementRef, inject, Renderer2 } from '@angular/core';

import { ModalService } from '../../services/modal.service';
import { VehicleSizeService } from '../../services/vehicle-size.service';
import { VehicleSizeCardComponent } from '../vehicle-size-card/vehicle-size-card.component';
import { BookingEstimateService } from '../../services/booking-estimate.service';
import { BookingEstimateCardComponent } from '../booking-estimate-card/booking-estimate-card.component';

@Component({
  selector: 'app-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrl: './booking-modal.component.css'
})
export class BookingModalComponent implements OnInit, OnDestroy {
  @Input() id?: string;
    isOpen = false;
    private element: any;
    protected vehicleSizeService: VehicleSizeService = inject(VehicleSizeService);
    protected bookingEstimateService: BookingEstimateService = inject(BookingEstimateService);
    sizes: VehicleSizeCardComponent[] = this.vehicleSizeService.getVehicleSizes();
    estimates?: BookingEstimateCardComponent[];
    protected activeService: string = "";
    protected activeSize: string = "";
    @Input() activeType!: string;
    protected bookingUrl: string = "https://calendly.com/boltmobiledetailing/";

    constructor(private modalService: ModalService, private el: ElementRef, private renderer: Renderer2) {
        this.element = el.nativeElement;
    }

    ngOnInit() {
        // add self (this modal instance) to the modal service so it can be opened from any component
        this.modalService.add(this);

        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);

        // close modal on background click
        this.element.addEventListener('click', (el: any) => {
            if (el.target.className === 'jw-modal') {
                this.close();
            }
        });
    }

    ngOnDestroy() {
        // remove self from modal service
        this.modalService.remove(this);

        // remove modal element from html
        this.element.remove();
    }

    open() {
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
        this.isOpen = true;
    }

    close() {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
        this.isOpen = false;
    }

    updateSize(shortSize: string) {
        this.bookingUrl = "https://calendly.com/boltmobiledetailing/";
        if (this.activeType === 'interior') {
            this.estimates = this.bookingEstimateService.getInteriorEstimatesBySize(shortSize);
        } else if (this.activeType === 'exterior') {
            this.estimates = this.bookingEstimateService.getExteriorEstimatesBySize(shortSize);
        } else {
            throw new Error('Service type error');
        }
    }

    activeEvent(divId: string, classN: string, toChange: boolean) {
        var els = Array.from(document.getElementsByClassName(classN));
        for (let eli of els) {
            this.renderer.setStyle(eli, 'outline', '0px solid transparent');
        }
        this.renderer.setStyle(document.getElementById(divId), 'outline', '2px solid white');
        this.renderer.setStyle(document.getElementById(divId), 'outline-offset', '5px');
        els = [];
        if (toChange) {
            this.bookingUrl = this.bookingUrl.slice(0,41) + divId;
        }
    }

}

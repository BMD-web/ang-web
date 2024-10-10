import { Injectable } from '@angular/core';
import { BookingModalComponent } from '../components/booking-modal/booking-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
    private dup?: BookingModalComponent;

  private modals: BookingModalComponent[] = [];

    add(modal: BookingModalComponent) {
        // ensure component has a unique id attribute
        if (!modal.id || this.modals.find(x => x.id === modal.id)) {
            var tmp: BookingModalComponent[] = [];
            this.modals.forEach((mdl) => {
                if (mdl.id === modal.id) {
                    tmp.push(mdl);
                }
            });
            tmp.forEach((mdl) => {
                this.remove(mdl);
            });
        }

        // add modal to array of active modals
        this.modals.push(modal);
    }

    remove(modal: BookingModalComponent) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(x => x === modal);
    }

    open(id: string) {
        // open modal specified by id
        const modal = this.modals.find(x => x.id === id);

        if (!modal) {
            throw new Error(`modal '${id}' not found`);
        }

        modal.open();
    }

    close() {
        // close the modal that is currently open
        const modal = this.modals.find(x => x.isOpen);
        modal?.close();
    }
}

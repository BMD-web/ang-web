import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingButtonComponent } from './components/booking-button/booking-button.component';
import { EstimateCardComponent } from './components/estimate-card/estimate-card.component';
import { DescriptionCardComponent } from './components/description-card/description-card.component';
import { ServiceInfoGridComponent } from './components/service-info-grid/service-info-grid.component';
import { ServiceInfoComponent } from './components/service-info/service-info.component';
import { BookingModalComponent } from './components/booking-modal/booking-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { VehicleSizeCardComponent } from './components/vehicle-size-card/vehicle-size-card.component';
import { BookingEstimateCardComponent } from './components/booking-estimate-card/booking-estimate-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { CoverPicComponent } from './components/cover-pic/cover-pic.component';
import { InteriorPageComponent } from './components/interior-page/interior-page.component';
import { ExteriorPageComponent } from './components/exterior-page/exterior-page.component';
import { ExternalBookingButtonComponent } from './components/external-booking-button/external-booking-button.component';
import { HeadlightPageComponent } from './components/headlight-page/headlight-page.component';
import { EnginePageComponent } from './components/engine-page/engine-page.component';
import { SingleServiceComponent } from './components/single-service/single-service.component';
import { SinglePageComponent } from './components/single-page/single-page.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingButtonComponent,
    EstimateCardComponent,
    DescriptionCardComponent,
    ServiceInfoGridComponent,
    ServiceInfoComponent,
    BookingModalComponent,
    FooterComponent,
    VehicleSizeCardComponent,
    BookingEstimateCardComponent,
    NavbarComponent,
    DropdownComponent,
    ClickOutsideDirective,
    CoverPicComponent,
    InteriorPageComponent,
    ExteriorPageComponent,
    ExternalBookingButtonComponent,
    HeadlightPageComponent,
    EnginePageComponent,
    SingleServiceComponent,
    SinglePageComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

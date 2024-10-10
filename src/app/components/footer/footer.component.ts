import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  protected email: string = "mailto:boltmobiledetailing@gmail.com";
  protected instagram: string = "https://www.instagram.com/boltmobiledetailing";
  protected facebook: string = "https://www.facebook.com/profile.php?id=61565896576928";
  protected phone: string = "(585) 371-8295";
}

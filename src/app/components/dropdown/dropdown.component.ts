import { Component, Renderer2 } from '@angular/core';
import { RouterEntry } from '../../interfaces/router-entry';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  isMenuOpened: boolean = false;
  constructor(private renderer: Renderer2) { }

  items: RouterEntry[] = [
    {
      link:"/exterior", 
      name:"Exterior Detailing"
    },
    {
      link: "/interior",
      name: "Interior Detailing"
    },
    {
      link: "/headlight",
      name: "Headlight Restoration"
    },
    {
      link: "/engine",
      name: "Engine Bay Cleaning"
    }
  ];

  showIt(val: boolean) {
    //this.renderer.setStyle(document.getElementById(id), 'display', 'block');
    this.isMenuOpened = val;
  }

  clickedOutside() {
    console.log("clicked outside");
    this.isMenuOpened = false;
  }
 
}

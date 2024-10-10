import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { NgxResize, ResizeResult } from 'ngxtension/resize';

@Component({
  selector: 'app-engine-page',
  templateUrl: './engine-page.component.html',
  styleUrl: './engine-page.component.css',
  hostDirectives: [{ directive: NgxResize, outputs: ['ngxResize']}]
})
export class EnginePageComponent {
  pu="engine.jpeg";
  tt="Engine Bay Cleaning";
  st="Mend the heart of your vehicle with a service designed to safely remove built-up grime that is shortening your car's lifespan.";
  ura="https://calendly.com/boltmobiledetailing/degrease-declutter-engine-service";
  urb="https://calendly.com/boltmobiledetailing/full-detail-engine-bay-cleaning-service";
  msga="Engine must be allowed to cool for at least three hours prior to cleaning appointment.";
  csta = 60;
  hrsa = "1.5 hours";
  cstb = 120;
  hrsb = "3 hours";
  height!: number;

  constructor(private renderer: Renderer2) { }

  calcPadding() {
    let ddheight = document.getElementById('dd-card-a')?.getBoundingClientRect().height;
    let rowheight = document.getElementById('right-col')?.getBoundingClientRect().height;
    let dheight = document.getElementById('d-card-a')?.getBoundingClientRect().height;

    let tmpheight = document.getElementById("right-col")?.getBoundingClientRect().height?.toString() + "px";
    this.renderer.setStyle(document.getElementById('center-col'), 'max-height', tmpheight);

    if (ddheight != null && rowheight != null && dheight != null) {
      let tm = document.getElementById('d-card-a')?.getBoundingClientRect().height;
      //console.log("TMP: " + tm);
      let height;
      if (tm != null) {
        height = rowheight - (dheight + ddheight + 10);
      } else {
        height = rowheight - (dheight + ddheight - 10);
      }
      let styleStr = height.toString() + "px";
      this.renderer.setStyle(document.getElementById('d-card-a'), 'padding-bottom', styleStr);
      let dif = ((rowheight - (dheight + ddheight + 10)) - height);
      if (dif != 0) {
        let errRowHeight = document.getElementById('right-col')?.getBoundingClientRect().height;
        let errEstHeight = document.getElementById('dd-card-a')?.getBoundingClientRect().height;
        let errCardHeight = document.getElementById('d-card-a')?.getBoundingClientRect().height;
        if (errCardHeight == null) {
          errCardHeight = 0;
        }
        if (errEstHeight == null) {
          errEstHeight = 0;
        }
        let errPadHht = document.getElementById('d-card-a')?.style.paddingBottom;
        let errPadHeight = Number(errPadHht?.slice(0, errPadHht.length-2));
        throw new Error("HEIGHT ERROR: DIF = " + dif + "\n\tRow Height: " + errRowHeight + "\n\tEstimate card height: " + errEstHeight + '\n\tPadded card height: ' + errCardHeight + "\n\tCurrent padding: " + errPadHeight + "\n\t\tSum: " + errEstHeight + " + " + errCardHeight + " + 10 = " + (errCardHeight + errEstHeight + 10));
      }
      //console.log(infostr);
      console.log("current padding: " + document.getElementById('d-card-a')?.style.paddingBottom + ", current difference: " + ((rowheight - (dheight + ddheight + 10)) - height).toString());
    } else {
      throw new Error('HEIGHT ERROR');
    }
  }

  setEqualHeights() {
    let rightHeight = document.getElementById('right-col')?.getBoundingClientRect().height;
    if (rightHeight != null) {
      let initPadding = 0;
      let margin = 10;
      let estHeight = document.getElementById('dd-card-a')?.getBoundingClientRect().height;
      let curHeight = document.getElementById('d-card-a')?.getBoundingClientRect().height;
      let curPad = document.getElementById('d-card-a')?.style.paddingBottom;
      if (estHeight == null) {
        throw new Error('est height')
      } else if (curHeight == null) {
        throw new Error('curr height');
      } else if (curPad == null) {
        curPad = "0px";
      }
      let totla = margin + estHeight + curHeight;
      initPadding = (rightHeight - totla) + Number(curPad.slice(0,curPad.length-2));
      let istr = initPadding.toString() + "px";
      console.log(istr);
      this.renderer.setStyle(document.getElementById('d-card-a'), 'padding-bottom', istr);
      this.height = rightHeight;
      /*
      let estB =document.getElementById('dd-card-b')?.getBoundingClientRect().height;
      let curB = document.getElementById('d-card-b')?.getBoundingClientRect().height;
      let padB = document.getElementById('d-card-b')?.style.paddingBottom;
      if (estB == null) {
        throw new Error('esft height')
      } else if (curB == null) {
        throw new Error('curfr height');
      } else if (padB == null) {
        padB = "0px";
      }
      let totlb = margin + estB + curB;
      let initPaddingb = (rightHeight - totlb) + Number(padB.slice(0,padB.length-2));
      let istrb = initPaddingb.toString() + "px";
      console.log(istrb);
      this.renderer.setStyle(document.getElementById('d-card-b'), 'padding-bottom', istrb);
      */
    } else {
      throw new Error('Height Col Error');
    }
  }

  ngAfterViewInit() {
    let tmp = document.getElementById('right-col')?.getBoundingClientRect().height;
    if (tmp != null) {
      this.height = tmp;
      this.setEqualHeights();
    } else {
      throw new Error("VIEW INIT ERROR");
    }
  }

  @HostListener('ngxResize',['$event'])
  onResize(event: Event) {
    this.setEqualHeights();
  }

  makeSize() {
    let tmp = document.getElementById('right-col')?.getBoundingClientRect().height;
    //console.log(tmp);
    if (tmp != this.height && tmp != null && tmp < this.height) {
      let resDif = tmp - this.height;
      console.log(resDif.toString() + " = " + tmp.toString() + " - " + this.height.toString());
      let currentPads = document.getElementById('d-card-a')?.style.paddingBottom;
      let newPad;
      if (currentPads != null) {
        let currentPad = Number(currentPads?.slice(0, currentPads.length-2));
        newPad = resDif + (currentPad + 10);
      } else {
        newPad = resDif;
      }
      let newPads;
      if (newPad.toString().length > 5) {
        newPads = newPad.toString().slice(0,5) + "px";
      } else {
        newPads = newPad.toString() + "px";
      }
      this.renderer.setStyle(document.getElementById('d-card-a'), 'padding-bottom', newPads);
      console.log(newPads);
      this.height = tmp;
    }
  }
}

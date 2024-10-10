import { Component, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-cover-pic',
  templateUrl: './cover-pic.component.html',
  styleUrl: './cover-pic.component.css'
})
export class CoverPicComponent implements OnInit{
  @Input() picUrl!: string;
  @Input() title!: string;
  @Input() subtitle!: string;

  constructor(private renderer: Renderer2) {
    
  }
  ngOnInit(): void {
    var styleString: string = "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.8)),url(" + this.picUrl + ") no-repeat center center / cover";
    this.renderer.setStyle(document.getElementById('cover-pic'), 'background', styleString);
  }
}

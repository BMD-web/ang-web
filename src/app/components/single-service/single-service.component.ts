import { Component, Input, inject } from '@angular/core';
import { SingleService } from '../../interfaces/single-service';
import { SingleServiceService } from '../../services/single-service.service';

@Component({
  selector: 'app-single-service',
  templateUrl: './single-service.component.html',
  styleUrl: './single-service.component.css'
})
export class SingleServiceComponent {
  @Input() serv!: SingleService;
  tipName!: string;
  
  ngOnInit() {
    this.tipName = this.serv.name.split(" ")[0];
  }
}

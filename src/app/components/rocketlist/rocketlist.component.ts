import { Component, OnInit } from '@angular/core';
import { RocketService, RocketInterface } from 'src/app/services/rocket.service';

@Component({
  selector: 'rocketlist',
  templateUrl: './rocketlist.component.html',
  styleUrls: ['./rocketlist.component.css']
})
export class RocketlistComponent implements OnInit {
  rockets: Array<RocketInterface>;

  constructor(private service: RocketService) {
    this.rockets = [];
  }

  ngOnInit(): void {
    this.service.load()?.subscribe(rockets => this.rockets = rockets);
  }

}

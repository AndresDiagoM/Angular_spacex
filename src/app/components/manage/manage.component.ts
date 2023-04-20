import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RocketInterface, RocketService } from 'src/app/services/rocket.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  rocketid: number = 0;
  rocket: RocketInterface = {
    id: 0,
    name: '',
    description: '',
    height: 0,
    country: '',
    flickr_images: []
  };

  constructor(private service: RocketService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.rocketid = params['id'];
    });
    if (this.rocketid > 0) {
      this.service.edit(this.rocketid)?.subscribe(rocket => this.rocket = rocket);
    } else {
      this.rocket = {
        id: 0,
        name: '',
        description: '',
        height: 0,
        country: '',
        flickr_images: []
      };
    }
  }

  add() {
    this.service.add(this.rocket);
  }

}

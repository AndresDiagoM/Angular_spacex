import { Component, Input, OnInit } from '@angular/core';
import { RocketService } from 'src/app/services/rocket.service';

@Component({
  selector: 'rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {
  @Input()
  rocket: any;

  constructor(private service: RocketService) {
  }

  ngOnInit(): void {
  }

  remove(id: number) {
    this.service.remove(id);
    return this.service.get();
  }

  editar(id: number) {
  }

  isPositive() {
    return (this.rocket && this.rocket.height > 50);
  }

  isNegative() {
    return (this.rocket && this.rocket.height < 50);
  }
}

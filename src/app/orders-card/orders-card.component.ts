import { Component, signal } from '@angular/core';
import { Location } from '@angular/common';
import { Order } from '../models/order.type';
import { Router } from '@angular/router';



@Component({
  selector: 'app-orders-card',
  imports: [],
  templateUrl: './orders-card.component.html',
  styleUrl: './orders-card.component.scss'
})
export class OrdersCardComponent {
  order = signal({});

  constructor(private router: Router){
    const currentNav = this.router.getCurrentNavigation()
    this.order.set(currentNav?.extras.state as Order)
  }
}

import { Component, signal } from '@angular/core';
import { Order } from '../models/order.type';
import { Router } from '@angular/router';
import { DateTimePipe } from '../pipes/date-time.pipe';



@Component({
  selector: 'app-orders-card',
  imports: [DateTimePipe],
  templateUrl: './orders-card.component.html',
  styleUrl: './orders-card.component.scss'
})
export class OrdersCardComponent {
  order = signal({} as Order);

  constructor(private router: Router){
    const currentNav = this.router.getCurrentNavigation()
    this.order.set(currentNav?.extras.state as Order)
  }
}

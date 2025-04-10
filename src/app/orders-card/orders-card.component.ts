import { Component, Input } from '@angular/core';
import { Order } from '../models/order.type';
import { Router } from '@angular/router';


@Component({
  selector: 'app-orders-card',
  imports: [],
  templateUrl: './orders-card.component.html',
  styleUrl: './orders-card.component.scss'
})
export class OrdersCardComponent {
  constructor(private router: Router){}

  ngOnInit(): void {
    const currentNav = this.router.getCurrentNavigation();
    // const id = currentNav.extras.state.id;
    console.log(currentNav)
  }
}

import { Component, inject, signal } from '@angular/core';
import { DBService } from '../services/dbservice.service';
import { Order } from '../models/order.type';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  DBService = inject(DBService);

  orders = signal<Array<Order>>([]);

  ngOnInit(): void {
    console.log("Getting all orders from DBService...");
    this.DBService.getAllOrders().subscribe((orders) =>{
      console.log("Received orders: ", orders)
      this.orders.set(orders);
    })
  }


}

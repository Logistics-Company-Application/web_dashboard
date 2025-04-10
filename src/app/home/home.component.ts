import { Component, inject, signal } from '@angular/core';
import { DBService } from '../services/dbservice.service';
import { Order } from '../models/order.type';
import { interval } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  DBService = inject(DBService);
  orders = signal<Array<Order>>([]);

  constructor(private router: Router){}

  getOrders(){
    console.log("Getting all orders from DBService...");
    this.DBService.getAllOrders().subscribe((orders) =>{
      this.orders.set(orders);
    })
  }

  //refresh orders every 10 seconds
  refreshOrders = interval(10000).subscribe(()=>{this.getOrders()});

  ngOnInit(): void {
    this.getOrders();
  }

  routeToOrderPage(order: Order){
    this.router.navigateByUrl('/order', {state: {id: 1}});
  }

}

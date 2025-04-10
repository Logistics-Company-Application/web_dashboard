import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Order } from '../models/order.type';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  http = inject(HttpClient);

  getAllOrders(){
    const url = "http://localhost:8001/h2/findAll";
    return this.http.get<Array<Order>>(url);
  }

  getAllPossibleProductNames(){
    return this.http.get<Array<string>>("http://localhost:8001/h2/getAllPossibleProducts")
  }

  getAllPossibleDescriptions(){
    return this.http.get<Array<string>>("http://localhost:8001/h2/getAllPossibleDescriptions")
  }

  getAllPossibleDestinations(){
    return this.http.get<Array<string>>("http://localhost:8001/h2/getAllPossibleDestinations")
  }
}

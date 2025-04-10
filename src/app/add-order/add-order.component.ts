import { Component, inject, Inject, signal } from '@angular/core';
import { DBService } from '../services/dbservice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-order',
  imports: [FormsModule],
  templateUrl: './add-order.component.html',
  styleUrl: './add-order.component.scss'
})
export class AddOrderComponent {
  dbService = inject(DBService);

  buyerName = signal('');
  productName = signal('')
  description = signal('');
  destination = signal('')
  possibleProductNames = signal<Array<string>>([])
  possibleDescriptions = signal<Array<string>>([])
  possibleDestinations = signal<Array<string>>([])
  
  ngOnInit(): void {
    this.dbService.getAllPossibleProductNames().subscribe(productNames =>{
      this.possibleProductNames.set(productNames)
    });
    this.dbService.getAllPossibleDescriptions().subscribe(descriptions => {
      this.possibleDescriptions.set(descriptions)
    });
    this.dbService.getAllPossibleDestinations().subscribe(destinations => {
      this.possibleDestinations.set(destinations)
    });
  }


  submitOrder(){
    console.log("Buyer Name: "+this.buyerName()+" Product Name: "+this.productName()+" Description: "+this.description()+" Destination: "+this.destination())
  }
}

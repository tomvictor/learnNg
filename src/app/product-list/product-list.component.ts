import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products : any[] = [
    {
      "id": 1,
      "name" : "Car",
      "type" : "Automobile",
      "price" : "$2000"
    },
    {
      "id": 2,
      "name" : "Antenna",
      "type" : "Electronics",
      "price" : "$100"
    },
    {
      "id": 3,
      "name" : "Weed",
      "type" : "Medicine",
      "price" : "$10"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

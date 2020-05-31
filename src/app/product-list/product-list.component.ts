import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  imageWidth : number = 90;
  imageMargin : number = 2;
  showImage : boolean = false;
  listFilter : string = "car";
  products : any[] = [
    {
      "id": 1,
      "name" : "Car",
      "type" : "Automobile",
      "price" : "$2000",
      "image_url" : "assets/images/car.jpg"
    },
    {
      "id": 2,
      "name" : "Antenna",
      "type" : "Electronics",
      "price" : "$100",
      "image_url" : "assets/images/antenna.jpg"
    },
    {
      "id": 3,
      "name" : "Battery",
      "type" : "Electronics",
      "price" : "$10",
      "image_url" : "assets/images/battery.jpg"
    }
  ];
  
  toggleImage():void {
    console.log("clicked");
    this.showImage = !this.showImage;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

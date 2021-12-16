import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  products: any = [{
    name: "Test",
    department: "dept",
    price: 100,
    discount: 25,
    image: "iphone",
    description: "some iphone"
  },
    {
      name: "Test2",
      department: "food dept",
      price: 200,
      discount: 150,
      image: "Android",
      description: "some Android"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

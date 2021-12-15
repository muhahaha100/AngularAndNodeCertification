import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

  constructor() { }

  product: any = {
    name: "",
    department: "",
    price: 0,
    discount: 0,
    image: "",
    description: ""
  };

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log(this.product);
  }

}

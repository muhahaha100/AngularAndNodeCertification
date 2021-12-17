import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    
    { id: 1, productId: 1, productName: 'a', qty: 2, price: 100},
    { id: 2, productId: 2, productName: 'b', qty: 3, price: 50},
    { id: 3, productId: 3, productName: 'c', qty: 4, price: 200},
  ];
  
  cartTotal = 0

  constructor() { }


  // Total is calculated using the formula below
  ngOnInit(): void {
    this.cartItems.forEach(item =>{
      this.cartTotal += (item.qty * item.price)
    })
  }

}

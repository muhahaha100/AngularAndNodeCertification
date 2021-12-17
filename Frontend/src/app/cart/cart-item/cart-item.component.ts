import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
// cartItem created in order to use it for showing the 
// product in the page using forloop

  @Input() cartItem: any;

  constructor() { }

  ngOnInit(): void {
  }

}

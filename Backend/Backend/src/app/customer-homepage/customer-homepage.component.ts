import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-homepage',
  templateUrl: './customer-homepage.component.html',
  styleUrls: ['./customer-homepage.component.css']
})
export class CustomerHomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mydata = [
    {"Name": "Apple Iphone 13 Pro Max", "Src":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-blue-select?wid=940&hei=1112&fmt=png-alpha&.v=1631652955000", "Price": 999},
    {"Name": "Samsung Galaxy S21", "Src":"https://image-us.samsung.com/SamsungUS/home/mobile/phones/galaxy-s/galaxy-s21/pdp/011421/PDP-P3-black-lockup-01-1600x1200.jpg?$product-details-jpg$", "Price": 1099},
    {"Name": "Microsoft Surface Laptop Go", "Src":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428997_sd.jpg;maxHeight=640;maxWidth=550", "Price": 500},
    {"Name": "Samsung - Galaxy Z Fold3", "Src":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6466/6466009_sd.jpg;maxHeight=640;maxWidth=550", "Price": 1599},
    {"Name": "Apple - MacBook Pro - 13in", "Src":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_US?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1632948875000", "Price": 1199},
    {"Name": "HP - Spectre x360 2-in-1 13.5in", "Src":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6479/6479182_sd.jpg;maxHeight=640;maxWidth=550", "Price": 1399},
    {"Name": "OnePlus - 9 Pro", "Src":"https://m.media-amazon.com/images/I/812M3vszITL._AC_SS450_.jpg", "Price": 799},
    {"Name": "Lenovo - Yoga 9i 14 2-in-1 14in", "Src":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6426/6426702_sd.jpg;maxHeight=640;maxWidth=550", "Price": 1149},
  ]

}
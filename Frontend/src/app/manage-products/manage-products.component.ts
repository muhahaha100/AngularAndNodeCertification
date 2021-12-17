import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

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

  constructor(private http: HttpClient, private changeDetection: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    const url ='http://localhost:8080/api/v1/products'
    this.http.get(url).subscribe((res)=>{
      this.products = (res as any).products;
      this.changeDetection.detectChanges();
      console.log(res);
    })
  }

}

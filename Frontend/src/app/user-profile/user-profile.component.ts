import {HttpClient} from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

/*
export class UserProfile{
  constructor(
    public id:number,
      public fname:string,
      public lname:string,
      public email:string,
      public phone:number,
      public address:{
        street:string,
        city:string,
        zipcode:number,
        state:string
      }
  ){}
 
  }
*/
 


 

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  addressForm= new FormGroup({
    street : new FormControl(), 
    city: new FormControl(),
    zipcode: new FormControl(),
    state: new FormControl()

  });

  

  profile1= 
    {
      'fname':'Rajan',
      'lname': 'Pokhrel',
      'email': 'rj@gmail.com',
      'phone': 9901,
      'address':
      {
        'street': '83 W Pionner',
        'city': 'Denton',
        'zipcode': 76201,
        'state': 'Tx'
      }

    }

  editAddress:boolean= false
  defaultimage:boolean= false
  interests: Array<String>=["Apple", "Samsung","Laptops"]


  constructor(){

  } 

  ngOnInit(): void {
    //this.getProfile()
  }
/*
  getProfile(){
    this.httpClient.get<any>('http://localhost:3000/api/profiles').subscribe(
      response =>
      {
        console.log(response);
        
      }
    )
    
  }
*/
  updateAddress()
  {
    this.editAddress=true
  }

  deleteImage()
  {
    this.defaultimage=true
  }

  addressinfo()
  {
    this.profile1.address.street= this.addressForm.value.street
    this.profile1.address.city= this.addressForm.value.city
    this.profile1.address.state= this.addressForm.value.state
    this.profile1.address.zipcode= this.addressForm.value.zipcode
    this.editAddress= false
  }

}

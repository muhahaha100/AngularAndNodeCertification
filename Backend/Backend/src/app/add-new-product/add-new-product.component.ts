import { Component, OnInit } from '@angular/core';

import {
  ValidatorFn,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  AbstractControl,
  ValidationErrors
} from "@angular/forms";

export const priceCheck: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  let price = parseFloat(control.get('price')?.value);
  let discount = parseFloat(control.get('discount')?.value);

  return (price && discount) && price >= discount ? null : { priceChecked: true };
};

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(64)]),
      department: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      discount: new FormControl(''),
      image: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required, Validators.minLength(20)])
    }, priceCheck);
  }

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
    console.log("UwU");
    console.log(this.productForm.get('name')?.errors);
    console.log(this.product);
  }

}

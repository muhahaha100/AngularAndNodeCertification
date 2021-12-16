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
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

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

  onSubmit(): void{
    console.log("OWO");
    console.log(this.productForm.get('name')?.errors);
  }

  ngOnInit(): void {
  }

}
